import { IoStar, IoMapOutline } from "react-icons/io5";
import { formatLocation, getCamperBadges, humanizeLabel } from "@/lib/format";
import type { CamperDetails } from "@/types/camper";
import styles from "./CamperOverview.module.css";

export default function CamperOverview({ camper }: { camper: CamperDetails }) {
  const badges = getCamperBadges(camper);
  const specs = [
    { label: "Form", value: humanizeLabel(camper.form) },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <div className={styles.overview}>
      <div className={styles.summaryCard}>
        <h1 className={styles.name}>{camper.name}</h1>

        <div className={styles.metaRow}>
          <span className={styles.meta}>
            <IoStar className={styles.starIcon} />
            {camper.rating}({camper.totalReviews} Reviews)
          </span>
          <span className={styles.meta}>
            <IoMapOutline className={styles.metaIcon} />
            {formatLocation(camper.location)}
          </span>
        </div>

        <p className={styles.price}>€{camper.price}</p>

        <p className={styles.description}>{camper.description}</p>
      </div>

      <div className={styles.detailsCard}>
        <h2 className={styles.detailsTitle}>Vehicle details</h2>

        <ul className={styles.badges}>
          {badges.map((badge, index) => (
            <li key={`${badge}-${index}`} className={styles.badge}>
              {badge}
            </li>
          ))}
        </ul>

        <dl className={styles.specs}>
          {specs.map((spec) => (
            <div key={spec.label} className={styles.specRow}>
              <dt className={styles.specLabel}>{spec.label}</dt>
              <dd className={styles.specValue}>{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
