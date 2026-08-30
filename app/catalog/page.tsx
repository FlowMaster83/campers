import { Metadata } from "next";
import Header from "@/components/Header/Header";
import CatalogView from "@/components/Catalog/CatalogView";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse our full catalog of campers and find the perfect one for your next trip.",
  openGraph: {
    title: "Catalog — TravelTrucks",
    description:
      "Browse our full catalog of campers and find the perfect one for your next trip.",
    images: ["/hero.png"],
    type: "website",
  },
};

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <h1 className="srOnly">Catalog</h1>
        <CatalogView />
      </main>
    </>
  );
}
