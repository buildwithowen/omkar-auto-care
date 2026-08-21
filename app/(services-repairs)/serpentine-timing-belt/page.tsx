import type { Metadata } from "next";
import Image from "next/image";

import ContactForm from "@/components/forms/ContactForm";
import ServiceProcessBar from "@/components/home/ServiceProcessBar";
import ServiceDetailsSection from "@/components/services/ServiceDetailsSection";
import ServiceChecklistSection from "@/components/services/ServiceChecklistSection";
import TopTierServicesSection from "@/components/home/TopTierServicesSection";
import ServiceStripSection from "@/components/home/ServiceStripSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

import styles from "@/components/home/Hero.module.css";


/* =========================================================
   GOOGLE REVIEWS
========================================================= */

const GOOGLE_REVIEWS_URL = "https://share.google/r8DdLR7WgoDlcMfvd";

const GOOGLE_RATING = "5.0";

const GOOGLE_REVIEW_COUNT = 71;


/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Serpentine & Timing Belt",

  description: "Hearing squealing under the bonnet? Omkar Autocare provides expert serpentine and timing belt inspections and replacement.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   SERPENTINE & TIMING BELT PAGE
========================================================= */

export default function ServicePage() {
  return (
    <>
      <section className={styles.hero}>
      {/* OPTIMISED SERVICE BACKGROUND */}
      <Image
        src="/images/services/omkar-autocare-serpentine-timing-belt.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={60}
        sizes="100vw"
        className={styles.heroBackground}
      />

      {/* DARK OVERLAY */}
      <div className={styles.overlay} />

      <div className={styles.inner}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h1>
            Belt squealing?
            <br />

            <span
              style={{
                color: "#fd8833",
                whiteSpace: "normal",
              }}
            >
              Timing Belt Repairs.
            </span>
          </h1>

          <p>A failing belt can leave you stranded. Timing belt failure can cause severe engine damage.</p>

          {/* GOOGLE REVIEWS */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviews}
            aria-label="Rated 5.0 out of 5 based on 71 Google reviews. Open Google Business Profile."
          >
            <span
              className={styles.googleWordmark}
              aria-hidden="true"
            >
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </span>

            <span className={styles.reviewTop}>
              <span className={styles.rating}>
                {GOOGLE_RATING}
              </span>

              <span
                className={styles.stars}
                aria-hidden="true"
              >
                ★★★★★
              </span>
            </span>

            <span className={styles.reviewCaption}>
              Based on{" "}
              <span className={styles.reviewCount}>
                {GOOGLE_REVIEW_COUNT}
              </span>{" "}
              Google reviews
            </span>
          </a>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>

      {/* BOTTOM SERVICE PROCESS BAR */}
      <ServiceProcessBar />
    </section>

      <ServiceDetailsSection
        imageSrc="/images/services/omkar-autocare-serpentine-timing-belt.webp"
        imageLabel="SERPENTINE & TIMING BELTS"
        eyebrow="KNOW WHEN YOUR BELT IS FAILING"
        heading="A worn belt can stop your engine without warning."
        description="Cracked, loose or overdue belts can affect important vehicle systems. Timing belt failure can cause severe engine damage in many vehicles."
        points={[
          {
            title: "Squealing under the bonnet",
            description: "A high-pitched noise can indicate a worn, loose or slipping belt.",
          },
          {
            title: "Visible cracking or fraying",
            description: "Physical wear may mean the belt is approaching failure.",
          },
          {
            title: "Overdue replacement intervals",
            description: "Following manufacturer recommendations helps prevent unexpected breakdowns.",
          },
        ]}
      />

      <ServiceChecklistSection service="serpentine-timing-belt" />

      <TopTierServicesSection />

      <ServiceStripSection />

      <HomeContactSection />

      <WhyChooseUsSection />
    </>
  );
}