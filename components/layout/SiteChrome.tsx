"use client";

import type { ReactNode } from "react";

import { usePathname } from "next/navigation";


/* =========================================================
   SITE CHROME PROPS
========================================================= */

type SiteChromeProps = {
  children: ReactNode;

  header: ReactNode;

  preFooter: ReactNode;

  footer: ReactNode;

  contactPopup: ReactNode;
};


/* =========================================================
   SITE CHROME
========================================================= */

export default function SiteChrome({
  children,

  header,

  preFooter,

  footer,

  contactPopup,
}: SiteChromeProps) {
  const pathname = usePathname();

  const isThankYouPage =
    pathname === "/thank-you" ||
    pathname === "/thank-you/";


  /* =======================================================
     DISTRACTION-FREE THANK YOU PAGE
  ======================================================= */

  if (isThankYouPage) {
    return <>{children}</>;
  }


  /* =======================================================
     NORMAL WEBSITE LAYOUT
  ======================================================= */

  return (
    <>
      {header}

      <main>
        {children}

        {preFooter}
      </main>

      {footer}

      {contactPopup}
    </>
  );
}
