import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "modern-normalize";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
