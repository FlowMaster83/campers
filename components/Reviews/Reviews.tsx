import { IoStar } from "react-icons/io5";
import type { CamperReview } from "@/types/camper";
import styles from "./Reviews.module.css";

export default function Reviews({ reviews }: { reviews: CamperReview[] }) {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.heading}>Reviews</h2>

      <ul className={styles.list}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.avatar}>{review.reviewer_name.charAt(0)}</span>
              <div>
                <p className={styles.name}>{review.reviewer_name}</p>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IoStar
                      key={index}
                      className={
                        index < review.reviewer_rating
                          ? `${styles.star} ${styles.starFilled}`
                          : styles.star
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
