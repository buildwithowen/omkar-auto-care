"use client";

import type { ReactNode } from "react";

import { usePathname } from "next/navigation";

import Header from "@/components/layout/Header";

import PreFooterCTA from "@/components/layout/PreFooterCTA";

import Footer from "@/components/layout/Footer";

import ContactPopup from "@/components/forms/ContactPopup";


/* =========================================================
   SITE CHROME
========================================================= */

export default function SiteChrome({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const isThankYouPage =
    pathname === "/thank-you" ||
    pathname === "/thank-you/";


  /* =======================================================
     CLEAN THANK YOU PAGE

     No header, navigation, footer, promotional sections
     or contact popup.
  ======================================================= */

  if (isThankYouPage) {
    return <>{children}</>;
  }


  /* =======================================================
     NORMAL WEBSITE LAYOUT
  ======================================================= */

  return (
    <>
      {/* GLOBAL HEADER */}

      <Header />


      {/* PAGE CONTENT */}

      <main>
        {children}


        {/* GLOBAL BEFORE-FOOTER SECTION */}

        <PreFooterCTA />
      </main>


      {/* GLOBAL FOOTER */}

      <Footer />


      {/* GLOBAL CONTACT POPUP */}

      <ContactPopup />
    </>
  );
}
