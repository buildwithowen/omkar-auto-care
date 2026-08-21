"use client";

import dynamic from "next/dynamic";

import { useEffect, useState } from "react";


/* =========================================================
   LAZY-LOADED POPUP COMPONENT
========================================================= */

const ContactPopup = dynamic(
  () => import("@/components/forms/ContactPopup"),

  {
    ssr: false,
  }
);


/* =========================================================
   LOAD ONLY AFTER THE CUSTOMER REQUESTS THE FORM
========================================================= */

export default function LazyContactPopup() {
  const [shouldLoad, setShouldLoad] =
    useState(false);

  useEffect(() => {
    const loadPopup = () => {
      setShouldLoad(true);
    };

    window.addEventListener(
      "open-contact-form",
      loadPopup
    );

    return () => {
      window.removeEventListener(
        "open-contact-form",
        loadPopup
      );
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <ContactPopup initialOpen />
  );
}
