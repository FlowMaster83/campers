import CamperList from "@/components/CamperList/CamperList";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Catalog() {
  return (
    <div>
      <Header />
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.content}>
          <CamperList />
        </div>
      </div>
    </div>
  );
}
