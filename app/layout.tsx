import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import Header from "@/components/layout/Header";

import PreFooterCTA from "@/components/layout/PreFooterCTA";

import Footer from "@/components/layout/Footer";

import ContactPopup from "@/components/forms/ContactPopup";

import SiteChrome from "@/components/layout/SiteChrome";

import "./globals.css";


/* =========================================================
   FONT
========================================================= */

const montserrat = Montserrat({
  subsets: ["latin"],

  variable: "--font-montserrat",

  display: "swap",
});


/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    default: "Omkar Autocare",

    template: "%s | Omkar Autocare",
  },

  description:
    "Professional mobile vehicle servicing, repairs and automotive care from Omkar Autocare.",

  metadataBase: new URL(
    "https://omkarautocare.com.au"
  ),
};


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <SiteChrome
          header={<Header />}
          preFooter={<PreFooterCTA />}
          footer={<Footer />}
          contactPopup={<ContactPopup />}
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
