import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader({ visible }: { visible: boolean }) {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.spinner}>
          <div className={styles.track} />
          <ClipLoader
            size={72}
            cssOverride={{
              position: "absolute",
              inset: 0,
              borderWidth: 6,
              borderTopColor: "#6d7b75",
              borderRightColor: "#6d7b75",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
            }}
          />
        </div>
        <h2 className={styles.title}>Loading tracks...</h2>
        <p className={styles.subtitle}>
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>
  );
}
