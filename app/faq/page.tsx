import type { Metadata } from "next";

import FAQHero from "@/components/faq/FAQHero";
import FAQSection from "@/components/home/FAQSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";


/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Frequently Asked Questions",

  description:
    "Find answers to common questions about mobile car servicing, repairs, pricing and bookings with Omkar Autocare.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   FAQ PAGE
========================================================= */

export default function FAQPage() {
  return (
    <>
      {/* DEDICATED FAQ HERO */}

      <FAQHero />


      {/* EXISTING FAQ ACCORDION */}

      <div id="faq-answers">
        <FAQSection />
      </div>


      {/* REUSABLE CONTACT SECTION */}

      <HomeContactSection />


      {/* REUSABLE WHY CHOOSE US SECTION */}

      <WhyChooseUsSection />
    </>
  );
}
