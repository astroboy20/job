import type { Metadata } from "next";
import { Inter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const hanken_grotesk = Hanken_Grotesk({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "GetAJob",
  description: "Get a job wesite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hanken_grotesk.className}>{children}</body>
    </html>
  );
}
