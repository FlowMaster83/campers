import { IoStar, IoMapOutline } from "react-icons/io5";
import type { StaticImageData } from "next/image";
import styles from "./CamperOverview.module.css";

export type CamperReview = {
  name: string;
  rating: number;
  comment: string;
};

export type CamperDetails = {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  location: string;
  description: string;
  images: StaticImageData[];
  badges: string[];
  specs: { label: string; value: string }[];
  reviews: CamperReview[];
};

export default function CamperOverview({ camper }: { camper: CamperDetails }) {
  return (
    <div className={styles.overview}>
      <div className={styles.summaryCard}>
        <h1 className={styles.name}>{camper.name}</h1>

        <div className={styles.metaRow}>
          <span className={styles.meta}>
            <IoStar className={styles.starIcon} />
            {camper.rating}({camper.reviewsCount} Reviews)
          </span>
          <span className={styles.meta}>
            <IoMapOutline className={styles.metaIcon} />
            {camper.location}
          </span>
        </div>

        <p className={styles.price}>€{camper.price}</p>

        <p className={styles.description}>{camper.description}</p>
      </div>

      <div className={styles.detailsCard}>
        <h2 className={styles.detailsTitle}>Vehicle details</h2>

        <ul className={styles.badges}>
          {camper.badges.map((badge) => (
            <li key={badge} className={styles.badge}>
              {badge}
            </li>
          ))}
        </ul>

        <dl className={styles.specs}>
          {camper.specs.map((spec) => (
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
