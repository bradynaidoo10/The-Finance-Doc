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
  title: "The Blueprint | Financial Planning South Africa",
  description:
    "Award-winning financial advisory in South Africa. Life cover, retirement planning, medical aid, investments — tailored to your life. Free consultation via WhatsApp.",
  keywords: [
    "financial advisor South Africa",
    "life cover KwaZulu-Natal",
    "medical aid broker",
    "retirement planning SA",
    "The Blueprint",
  ],
  openGraph: {
    title: "The Blueprint | Protect Your Family. Build Your Legacy.",
    description:
      "Award-winning financial advisory in South Africa. Life cover, retirement planning, medical aid, investments — tailored to your life.",
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
