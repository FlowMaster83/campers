"use client";

import { useState } from "react";
import CamperCard, { type Camper } from "@/components/CamperCard/CamperCard";
import Loader from "../Loader/Loader";
import styles from "./CamperList.module.css";

const MOCK_CAMPERS: Camper[] = [
  {
    id: "1",
    name: "Mavericks",
    price: 8000,
    rating: 4.4,
    reviewsCount: 2,
    location: "Kyiv, Ukraine",
    description:
      "Embrace simplicity and freedom with the Mavericks panel truck...",
    fuel: "Petrol",
    transmission: "Automatic",
    form: "Alcove",
  },
  {
    id: "2",
    name: "Kuga Camper",
    price: 8000,
    rating: 4.2,
    reviewsCount: 10,
    location: "Kyiv, Ukraine",
    description:
      "The pictures shown here are example vehicles of the respective...",
    fuel: "Petrol",
    transmission: "Automatic",
    form: "Alcove",
  },
];

export default function CamperList() {
  // тимчасово для перевірки лоадера
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  // тимчасово для перевірки лоадера

  return (
    <>
      <ul className={styles.list}>
        {MOCK_CAMPERS.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>
      <div className={styles.loadMoreWrapper}>
        <button
          type="button"
          className={styles.loadMore}
          onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
      <Loader visible={isLoading} />
    </>
  );
}
