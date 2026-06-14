import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Finance Doc | Financial Health Specialist South Africa",
  description:
    "The Finance Doc — South Africa's financial health specialist. Life cover, retirement planning, medical aid, disability cover and wealth building. Free financial health check-up via WhatsApp. KwaZulu-Natal.",
  keywords: [
    "financial advisor South Africa",
    "life cover KZN",
    "medical aid broker Pietermaritzburg",
    "retirement planning SA",
    "The Finance Doc",
    "Brady Naidoo",
    "financial health specialist",
  ],
  openGraph: {
    title: "The Finance Doc | Diagnosing Your Financial Future.",
    description:
      "Your finances have symptoms. We have the cure. Book your free financial health check-up today.",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
