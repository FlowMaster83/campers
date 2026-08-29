import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./EmptyState.module.css";

type EmptyStateProps = {
  onReset: () => void;
};

export default function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className={styles.wrapper} data-empty-state>
      <Image
        src="/no-campers.png"
        alt=""
        width={488}
        height={463}
        className={styles.illustration}
      />

      <h2 className={styles.title}>No campers found</h2>
      <p className={styles.subtitle}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={styles.actions}>
        <button type="button" className={styles.clearButton} onClick={onReset}>
          <IoCloseOutline className={styles.clearIcon} />
          Clear filters
        </button>
        <button type="button" className={styles.viewAllButton} onClick={onReset}>
          View all campers
        </button>
      </div>
    </div>
  );
}
