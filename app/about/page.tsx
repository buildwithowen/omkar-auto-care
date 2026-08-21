import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";

import AboutStorySection from "@/components/about/AboutStorySection";

import PerformanceAssuranceSection from "@/components/about/PerformanceAssuranceSection";

import TopTierServicesSection from "@/components/home/TopTierServicesSection";

import HomeContactSection from "@/components/home/HomeContactSection";

import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";


/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about OMKAR Autocare, our mobile automotive services and the performance assurance behind our vehicle servicing and repairs.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <>
      {/* DEDICATED ABOUT HERO */}

      <AboutHero />


      {/* COMPANY STORY */}

      <AboutStorySection />


      {/* PERFORMANCE ASSURANCE */}

      <PerformanceAssuranceSection />


      {/* REUSABLE SERVICES GRID */}

      <TopTierServicesSection />


      {/* REUSABLE CONTACT SECTION */}

      <HomeContactSection />


      {/* REUSABLE WHY CHOOSE US SECTION */}

      <WhyChooseUsSection />
    </>
  );
}
