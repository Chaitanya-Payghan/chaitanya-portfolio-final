import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaitanya | Future Artificial Intelligence Research Engineer",
  description:
    "A cinematic personal headquarters for Chaitanya, a future Artificial Intelligence Research Engineer building intelligent systems and meaningful technology.",
  keywords: ["Chaitanya", "AI", "portfolio", "research engineer", "machine learning", "projects"],
  openGraph: {
    title: "Chaitanya | Future AIRE",
    description: "Digital headquarters of a future Artificial Intelligence Research Engineer.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
