import { IoMapOutline, IoCloseOutline } from "react-icons/io5";
import styles from "./Sidebar.module.css";

const CAMPER_FORM = ["Alcove", "Panel Van", "Integrated", "Semi Integrated"];
const ENGINE = ["Diesel", "Petrol", "Hybrid", "Electric"];
const TRANSMISSION = ["Automatic", "Manual"];

export default function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <aside className={styles.sidebar}>
        <form className={styles.form}>
          <div className={styles.location}>
            <span className={styles.label}>Location</span>
            <div className={styles.input}>
              <IoMapOutline className={styles.inputIcon} />
              <span>Kyiv</span>
            </div>
          </div>

          <div className={styles.filters}>
            <h2 className={styles.title}>Filters</h2>

            {/* Camper form */}
            <fieldset className={styles.group}>
              <legend className={styles.label}>Camper form</legend>
              {CAMPER_FORM.map((option) => (
                <label key={option} className={styles.option}>
                  <input
                    type="radio"
                    name="camperForm"
                    className={styles.radio}
                    defaultChecked={option === "Panel Van"}
                  />
                  {option}
                </label>
              ))}
            </fieldset>

            {/* Engine */}
            <fieldset className={styles.group}>
              <legend className={styles.label}>Engine</legend>
              {ENGINE.map((option) => (
                <label key={option} className={styles.option}>
                  <input
                    type="radio"
                    name="engine"
                    className={styles.radio}
                    defaultChecked={option === "Petrol"}
                  />
                  {option}
                </label>
              ))}
            </fieldset>

            {/* Transmission */}
            <fieldset className={styles.group}>
              <legend className={styles.label}>Transmission</legend>
              {TRANSMISSION.map((option) => (
                <label key={option} className={styles.option}>
                  <input
                    type="radio"
                    name="transmission"
                    className={styles.radio}
                    defaultChecked={option === "Automatic"}
                  />
                  {option}
                </label>
              ))}
            </fieldset>
          </div>

          <button type="submit" className={styles.search}>
            Search
          </button>
          <button type="reset" className={styles.clear}>
            <IoCloseOutline className={styles.clearIcon} />
            Clear filters
          </button>
        </form>
      </aside>
    </div>
  );
}
