import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ERANI | Profitability Firewall",
  description: "Infraestructura de auditoría forense para agencias de alto rendimiento.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/isologo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/isologo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
