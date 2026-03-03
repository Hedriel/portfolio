import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hernan Gonzalez | Frontend Developer",
  description:
    "Frontend Developer with experience at MercadoLibre, Globant, and Nodus. Specialized in React, Next.js, TypeScript, and Tailwind.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
