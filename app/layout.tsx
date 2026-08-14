import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import ContactPopup from "@/components/forms/ContactPopup";


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

  metadataBase: new URL("https://omkarautocare.com.au"),
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

        {/* WEBSITE */}
        {children}


        {/* GLOBAL CONTACT POPUP */}
        <ContactPopup />

      </body>
    </html>
  );
}