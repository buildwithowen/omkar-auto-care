import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";

import ContactDetailsSection from "@/components/contact/ContactDetailsSection";

import TopTierServicesSection from "@/components/home/TopTierServicesSection";

import FAQSection from "@/components/home/FAQSection";

import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";


/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact OMKAR Autocare for mobile car servicing, vehicle repairs and professional automotive advice. Call 0430 729 392 or request a booking online.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  return (
    <>
      {/* DEDICATED CONTACT HERO AND FORM */}

      <ContactHero />


      {/* CONTACT DETAILS */}

      <ContactDetailsSection />


      {/* REUSABLE SERVICES GRID */}

      <TopTierServicesSection />


      {/* REUSABLE FREQUENTLY ASKED QUESTIONS */}

      <FAQSection />


      {/* REUSABLE WHY CHOOSE US SECTION */}

      <WhyChooseUsSection />
    </>
  );
}
