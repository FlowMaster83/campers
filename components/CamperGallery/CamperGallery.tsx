"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "swiper/css/thumbs";
import type { CamperGalleryImage } from "@/types/camper";
import styles from "./CamperGallery.module.css";

export default function CamperGallery({
  images,
  alt,
}: {
  images: CamperGalleryImage[];
  alt: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  if (images.length === 0) {
    return null;
  }

  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
      >
        {sortedImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={image.original}
                alt={alt}
                fill
                sizes="638px"
                className={styles.mainImage}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        watchSlidesProgress
        slidesPerView={sortedImages.length}
        spaceBetween={32}
        className={styles.thumbsSwiper}
      >
        {sortedImages.map((image, index) => (
          <SwiperSlide key={image.id} className={styles.thumbnailButton}>
            <Image
              src={image.thumb}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              sizes="150px"
              className={styles.thumbnailImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
