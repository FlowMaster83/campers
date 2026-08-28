import Image from "next/image";
import Link from "next/link";
import { IoStar, IoMapOutline, IoGitNetworkOutline, IoCarOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import placeholderImage from "@/public/hero.png";
import styles from "./CamperCard.module.css";

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  location: string;
  description: string;
  fuel: string;
  transmission: string;
  form: string;
};

export default function CamperCard({ camper }: { camper: Camper }) {
  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={placeholderImage}
          alt={camper.name}
          fill
          sizes="219px"
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{camper.name}</h3>
          <span className={styles.price}>€{camper.price}</span>
        </div>

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

        <p className={styles.description}>{camper.description}</p>

        <ul className={styles.badges}>
          <li className={styles.badge}>
            <BsFuelPump className={styles.badgeIcon} />
            {camper.fuel}
          </li>
          <li className={styles.badge}>
            <IoGitNetworkOutline className={styles.badgeIcon} />
            {camper.transmission}
          </li>
          <li className={styles.badge}>
            <IoCarOutline className={styles.badgeIcon} />
            {camper.form}
          </li>
        </ul>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Show more
        </Link>
      </div>
    </li>
  );
}
