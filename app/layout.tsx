import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Núñez CARD 2026",
  description:
    "Plataforma digital de la candidatura del Dr. Francisco Núñez Cáceres a la Presidencia del CARD 2026–2029.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
