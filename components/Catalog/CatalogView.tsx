"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import CamperList from "@/components/CamperList/CamperList";
import type { CampersFilterParams } from "@/types/camper";
import styles from "./CatalogView.module.css";

const DEFAULT_FILTERS: CampersFilterParams = {
  location: "Kyiv",
  form: "panel_van",
  engine: "petrol",
  transmission: "automatic",
};

export default function CatalogView() {
  const [filters, setFilters] = useState<CampersFilterParams>(DEFAULT_FILTERS);

  return (
    <div className={styles.page}>
      <Sidebar filters={filters} onApply={setFilters} />
      <div className={styles.content}>
        <CamperList filters={filters} onClearFilters={() => setFilters({})} />
      </div>
    </div>
  );
}
