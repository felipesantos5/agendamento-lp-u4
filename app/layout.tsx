import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarbeariAgendamento",
  description: "Compre BarbeariAgendamento",
  generator: "BarbeariAgendamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
