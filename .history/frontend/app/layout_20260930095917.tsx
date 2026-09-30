import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SupplyMind | AI Supply Chain Intelligence",
  description:
    "AI-powered supply chain and inventory intelligence platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}