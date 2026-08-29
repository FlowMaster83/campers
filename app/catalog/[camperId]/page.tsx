import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperOverview from "@/components/CamperOverview/CamperOverview";
import Reviews from "@/components/Reviews/Reviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import { getCamperById, getCamperReviews } from "@/lib/api/campersApi";
import { ApiError } from "@/lib/api/httpClient";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: PageProps<"/catalog/[camperId]">): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);

    return {
      title: camper.name,
      description: camper.description,
      openGraph: {
        title: `${camper.name} — TravelTrucks`,
        description: camper.description,
        images: camper.gallery[0]?.original
          ? [camper.gallery[0].original]
          : ["/hero.png"],
        type: "website",
      },
    };
  } catch {
    return {
      title: "Camper Details",
    };
  }
}

async function fetchCamperDetails(camperId: string) {
  try {
    return await Promise.all([
      getCamperById(camperId),
      getCamperReviews(camperId),
    ]);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }
    throw error;
  }
}

export default async function CamperDetailsPage({
  params,
}: PageProps<"/catalog/[camperId]">) {
  const { camperId } = await params;
  const [camper, reviews] = await fetchCamperDetails(camperId);

  return (
    <div>
      <Header />
      <div className={styles.page}>
        <div className={styles.topRow}>
          <CamperGallery images={camper.gallery} alt={camper.name} />
          <CamperOverview camper={camper} />
        </div>

        <div className={styles.bottomRow}>
          <Reviews reviews={reviews} />
          <div className={styles.bookingWrap}>
            <BookingForm camperId={camper.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
