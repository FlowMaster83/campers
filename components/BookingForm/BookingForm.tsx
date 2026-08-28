"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { IoAlertCircleOutline } from "react-icons/io5";
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

export default function BookingForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema,
    onSubmit: () => {},
  });

  const nameError = formik.touched.name && formik.errors.name;
  const emailError = formik.touched.email && formik.errors.email;

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Book your campervan now</h2>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

      <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
        <div className={styles.field}>
          {nameError && <span className={styles.fieldLabel}>Name*</span>}
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={nameError ? `${styles.input} ${styles.inputError}` : styles.input}
            />
            {nameError && <IoAlertCircleOutline className={styles.errorIcon} />}
          </div>
          {nameError && <p className={styles.errorText}>{formik.errors.name}</p>}
        </div>

        <div className={styles.field}>
          {emailError && <span className={styles.fieldLabel}>Email*</span>}
          <div className={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={emailError ? `${styles.input} ${styles.inputError}` : styles.input}
            />
            {emailError && <IoAlertCircleOutline className={styles.errorIcon} />}
          </div>
          {emailError && <p className={styles.errorText}>{formik.errors.email}</p>}
        </div>

        <button type="submit" className={styles.submit}>
          Send
        </button>
      </form>
    </div>
  );
}
