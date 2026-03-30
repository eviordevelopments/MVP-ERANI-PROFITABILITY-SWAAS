import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://erani.mx'),
  title: {
    default: "ERANI | Diagnóstico Forense y Rentabilidad para Agencias",
    template: "%s | ERANI"
  },
  description: "Infraestructura de auditoría forense y análisis de rentabilidad para agencias de alto rendimiento. Identificamos fugas financieras y calculamos tu ROI de recuperación.",
  keywords: [
    "erani", "erani.mx", "erani.com", "ERANI", "Erani", 
    "Rentabilidad", "Diagnostico forense", "Analisis de rentabilidad", 
    "reporte finaciero", "Agencia", "SwaS", "Profitability Firewall", 
    "Gestión de proyectos", "Auditoría financiera"
  ],
  authors: [{ name: "ERANI" }],
  creator: "ERANI",
  publisher: "ERANI",
  openGraph: {
    title: "ERANI | Diagnóstico Forense y Rentabilidad",
    description: "Diagnóstico Forense de Rentabilidad. Audita tu estructura de datos y detén tus fugas de capital.",
    url: "https://erani.mx",
    siteName: "ERANI",
    images: [
      {
        url: "/isologo.png",
        width: 512,
        height: 512,
        alt: "ERANI Logo Oficial",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ERANI | Profitability Firewall",
    description: "Analizamos tu rentabilidad y detenemos fugas operativas.",
    images: ["/isologo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZ2FS56Q"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TZ2FS56Q');
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w3fik37ike");
          `}
        </Script>
        
        {/* Botpress Webchat Integrations */}
        <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="lazyOnload" />
        <Script src="https://files.bpcontent.cloud/2026/03/29/06/20260329065819-KYTPHTGL.js" strategy="lazyOnload" defer />
        
        {children}
      </body>
    </html>
  );
}
