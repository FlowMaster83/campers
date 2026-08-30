"use client";

import { useState, type FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IoAlertCircleOutline } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { createBookingRequest } from "@/lib/api/campersApi";
import styles from "./BookingForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Please enter your name.")
    .test("not-numeric", "Please enter your name.", (value) =>
      value ? Number.isNaN(Number(value)) : false,
    ),
  email: Yup.string()
    .trim()
    .required("Please enter your email.")
    .email("Please enter your email."),
});

export default function BookingForm({ camperId }: { camperId: string }) {
  const mutation = useMutation({
    mutationFn: (values: { name: string; email: string }) =>
      createBookingRequest(camperId, values),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema,
    onSubmit: (values, helpers) =>
      mutation
        .mutateAsync(values)
        .then(() => {
          helpers.resetForm();
          toast.success("Booking request sent! We'll be in touch soon.");
        })
        .catch(() => {}),
  });

  const nameError = formik.touched.name && formik.errors.name;
  const emailError = formik.touched.email && formik.errors.email;

  const [flickerToken, setFlickerToken] = useState(0);
  const [focusedField, setFocusedField] = useState<"name" | "email" | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = await formik.validateForm();

    if (Object.keys(errors).length > 0) {
      await formik.setTouched({ name: true, email: true });
      setFlickerToken((token) => token + 1);
      return;
    }

    formik.submitForm();
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Book your campervan now</h2>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          {nameError && <span className={styles.fieldLabel}>Name*</span>}
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="name"
              placeholder={focusedField === "name" ? "Name" : "Name*"}
              value={formik.values.name}
              onChange={formik.handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() =>
                setFocusedField((current) => (current === "name" ? null : current))
              }
              className={nameError ? `${styles.input} ${styles.inputError}` : styles.input}
            />
            {nameError && <IoAlertCircleOutline className={styles.errorIcon} />}
          </div>
          {nameError && (
            <p
              key={`name-${flickerToken}`}
              className={`${styles.errorText} ${styles.errorTextFlicker}`}
            >
              {formik.errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          {emailError && <span className={styles.fieldLabel}>Email*</span>}
          <div className={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              placeholder={focusedField === "email" ? "Email" : "Email*"}
              value={formik.values.email}
              onChange={formik.handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() =>
                setFocusedField((current) => (current === "email" ? null : current))
              }
              className={emailError ? `${styles.input} ${styles.inputError}` : styles.input}
            />
            {emailError && <IoAlertCircleOutline className={styles.errorIcon} />}
          </div>
          {emailError && (
            <p
              key={`email-${flickerToken}`}
              className={`${styles.errorText} ${styles.errorTextFlicker}`}
            >
              {formik.errors.email}
            </p>
          )}
        </div>

        {mutation.isError && (
          <p className={styles.errorText}>Something went wrong. Please try again.</p>
        )}

        <button type="submit" className={styles.submit} disabled={formik.isSubmitting}>
          {formik.isSubmitting ? <ClipLoader size={20} color="#ffffff" /> : "Send"}
        </button>
      </form>
    </div>
  );
}
