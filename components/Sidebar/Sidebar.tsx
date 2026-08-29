"use client";

import { useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { IoMapOutline, IoCloseOutline } from "react-icons/io5";
import { getCampersFilters } from "@/lib/api/campersApi";
import { campersKeys } from "@/lib/api/queryKeys";
import { humanizeLabel } from "@/lib/format";
import type { CamperEngine, CamperForm, CamperTransmission, CampersFilterParams } from "@/types/camper";
import styles from "./Sidebar.module.css";

const FALLBACK_FORMS: CamperForm[] = ["alcove", "panel_van", "integrated", "semi_integrated"];
const FALLBACK_ENGINES: CamperEngine[] = ["diesel", "petrol", "hybrid", "electric"];
const FALLBACK_TRANSMISSIONS: CamperTransmission[] = ["automatic", "manual"];

type SidebarProps = {
  filters: CampersFilterParams;
  onApply: (filters: CampersFilterParams) => void;
};

export default function Sidebar({ filters, onApply }: SidebarProps) {
  const { data: filterOptions } = useQuery({
    queryKey: campersKeys.filters(),
    queryFn: getCampersFilters,
    staleTime: Infinity,
  });

  const [draft, setDraft] = useState<CampersFilterParams>(filters);
  const [prevFilters, setPrevFilters] = useState(filters);

  if (filters !== prevFilters) {
    setPrevFilters(filters);
    setDraft(filters);
  }

  const forms = filterOptions?.forms ?? FALLBACK_FORMS;
  const engines = filterOptions?.engines ?? FALLBACK_ENGINES;
  const transmissions = filterOptions?.transmissions ?? FALLBACK_TRANSMISSIONS;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onApply(draft);
  };

  const handleClear = () => {
    setDraft({});
    onApply({});
  };

  return (
    <div className={styles.sidebarWrapper}>
      <aside className={styles.sidebar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.location}>
            <span className={styles.label}>Location</span>
            <div className={styles.input}>
              <IoMapOutline className={styles.inputIcon} />
              <input
                type="text"
                className={styles.locationInput}
                placeholder="Enter location"
                value={draft.location ?? ""}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, location: event.target.value }))
                }
              />
            </div>
          </div>

          <div className={styles.filters}>
            <h2 className={styles.title}>Filters</h2>

            {/* Camper form */}
            <fieldset className={styles.group}>
              <legend className={styles.label}>Camper form</legend>
              {forms.map((option) => (
                <label key={option} className={styles.option}>
                  <input
                    type="radio"
                    name="camperForm"
                    className={styles.radio}
                    checked={draft.form === option}
                    onChange={() => setDraft((current) => ({ ...current, form: option }))}
                  />
                  {humanizeLabel(option)}
                </label>
              ))}
            </fieldset>

            {/* Engine */}
            <fieldset className={styles.group}>
              <legend className={styles.label}>Engine</legend>
              {engines.map((option) => (
                <label key={option} className={styles.option}>
                  <input
                    type="radio"
                    name="engine"
                    className={styles.radio}
                    checked={draft.engine === option}
                    onChange={() => setDraft((current) => ({ ...current, engine: option }))}
                  />
                  {humanizeLabel(option)}
                </label>
              ))}
            </fieldset>

            {/* Transmission */}
            <fieldset className={styles.group}>
              <legend className={styles.label}>Transmission</legend>
              {transmissions.map((option) => (
                <label key={option} className={styles.option}>
                  <input
                    type="radio"
                    name="transmission"
                    className={styles.radio}
                    checked={draft.transmission === option}
                    onChange={() =>
                      setDraft((current) => ({ ...current, transmission: option }))
                    }
                  />
                  {humanizeLabel(option)}
                </label>
              ))}
            </fieldset>
          </div>

          <button type="submit" className={styles.search}>
            Search
          </button>
          <button type="button" className={styles.clear} onClick={handleClear}>
            <IoCloseOutline className={styles.clearIcon} />
            Clear filters
          </button>
        </form>
      </aside>
    </div>
  );
}
