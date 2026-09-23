import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "modern-normalize";
import "./globals.css";
import Providers from "./providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campers-sage-six.vercel.app"),
  title: {
    template: "%s — TravelTrucks",
    default: "TravelTrucks — Camper Rental",
  },
  description: "Rent the perfect camper for your next trip with TravelTrucks.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "TravelTrucks — Camper Rental",
    description:
      "Rent the perfect camper for your next trip with TravelTrucks.",
    images: ["/hero.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
