"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "./CamperGallery.module.css";

export default function CamperGallery({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageWrapper}>
        <Image
          src={images[activeIndex]}
          alt={alt}
          fill
          sizes="638px"
          className={styles.mainImage}
          priority
        />
      </div>

      <ul className={styles.thumbnails}>
        {images.map((image, index) => (
          <li key={index} className={styles.thumbnailItem}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={
                index === activeIndex
                  ? `${styles.thumbnailButton} ${styles.thumbnailButtonActive}`
                  : styles.thumbnailButton
              }
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                sizes="150px"
                className={styles.thumbnailImage}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
