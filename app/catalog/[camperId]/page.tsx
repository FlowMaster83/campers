import Header from "@/components/Header/Header";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperOverview, { type CamperDetails } from "@/components/CamperOverview/CamperOverview";
import Reviews from "@/components/Reviews/Reviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import placeholderImage from "@/public/hero.png";
import styles from "./page.module.css";

const MOCK_DETAILS: Record<string, CamperDetails> = {
  "1": {
    id: "1",
    name: "Mavericks",
    price: 8000,
    rating: 4.4,
    reviewsCount: 2,
    location: "Kyiv, Ukraine",
    description:
      "Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads. This no-frills yet reliable panel truck offers the essentials for a comfortable journey, making it the perfect companion for those who value simplicity and functionality.",
    images: [placeholderImage, placeholderImage, placeholderImage, placeholderImage],
    badges: ["Automatic", "AC", "Petrol", "Kitchen", "Radio", "Alcove"],
    specs: [
      { label: "Form", value: "Panel truck" },
      { label: "Length", value: "5.4 m" },
      { label: "Width", value: "2.01 m" },
      { label: "Height", value: "2.05 m" },
      { label: "Tank", value: "132 l" },
      { label: "Consumption", value: "12.4 l / 100km" },
    ],
    reviews: [
      {
        name: "Alice",
        rating: 5,
        comment:
          "The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic.",
      },
      {
        name: "Bob",
        rating: 3,
        comment:
          "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Kuga Camper",
    price: 8000,
    rating: 4.2,
    reviewsCount: 10,
    location: "Kyiv, Ukraine",
    description:
      "The pictures shown here are example vehicles of the respective category. The Kuga Camper is a versatile panel truck built for comfortable, efficient travel with everything you need on the road.",
    images: [placeholderImage, placeholderImage, placeholderImage, placeholderImage],
    badges: ["Automatic", "AC", "Petrol", "Kitchen", "Radio", "Alcove"],
    specs: [
      { label: "Form", value: "Panel truck" },
      { label: "Length", value: "5.4 m" },
      { label: "Width", value: "2.01 m" },
      { label: "Height", value: "2.05 m" },
      { label: "Tank", value: "132 l" },
      { label: "Consumption", value: "12.4 l / 100km" },
    ],
    reviews: [
      {
        name: "Alice",
        rating: 5,
        comment:
          "The Kuga Camper was a perfect choice for my road trip. Compact, easy to drive, and had all the essentials.",
      },
      {
        name: "Bob",
        rating: 4,
        comment: "A solid option for a comfortable stay. Good for short and long trips alike.",
      },
    ],
  },
};

export default async function CamperDetailsPage({
  params,
}: PageProps<"/catalog/[camperId]">) {
  const { camperId } = await params;
  const camper = MOCK_DETAILS[camperId] ?? MOCK_DETAILS["1"];

  return (
    <div>
      <Header />
      <div className={styles.page}>
        <div className={styles.topRow}>
          <CamperGallery images={camper.images} alt={camper.name} />
          <CamperOverview camper={camper} />
        </div>

        <div className={styles.bottomRow}>
          <Reviews reviews={camper.reviews} />
          <div className={styles.bookingWrap}>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
