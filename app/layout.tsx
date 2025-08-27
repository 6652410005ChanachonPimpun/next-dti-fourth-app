import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Calculater Varity 2025 by DTI-SAU",
  description: "เครื่องคำนวนหลายหยาย 2025",
  keywords: ["เครื่องคำนวน", "BMW"],
  icons: {
    icon: "/public/calculator.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} `}
      >
        {children}
      </body>
    </html>
  );
}
