import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CORFAMEP S.A. | Líderes en Soluciones Industriales y Corporativas",
  description: "Soluciones industriales de vanguardia para el sector corporativo. Ingeniería, fabricación y mantenimiento con estándares globales.",
  keywords: ["CORFAMEP", "Ingeniería Industrial", "Soluciones Corporativas", "Mantenimiento Industrial"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
