import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peace Portfolio",
  description: "Personal portfolio of Peace."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
