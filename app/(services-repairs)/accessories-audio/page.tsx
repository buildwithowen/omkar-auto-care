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
  title: "Accessories & Audio",

  description: "Upgrade your vehicle with professional car audio and accessories installation from Omkar Autocare. Expert mobile service and quality workmanship.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   ACCESSORIES & AUDIO PAGE
========================================================= */

export default function ServicePage() {
  return (
    <>
      <section className={styles.hero}>
      {/* OPTIMISED SERVICE BACKGROUND */}
      <Image
        src="/images/services/omkar-autocare-accessories-audio.webp"
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
            Bad wiring? Big problems.
            <br />

            <span
              style={{
                color: "#fd8833",
                whiteSpace: "normal",
              }}
            >
              Accessories & Audio.
            </span>
          </h1>

          <p>Poorly installed accessories can drain your battery or damage your vehicle’s electrical system.</p>

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
        imageSrc="/images/services/omkar-autocare-accessories-audio.webp"
        imageLabel="ACCESSORIES & AUDIO"
        eyebrow="INSTALLED WITH PRECISION"
        heading="One wrong wire can cause bigger problems."
        description="A poorly fitted stereo, dash cam or electrical accessory can drain your battery, damage sensitive components or create faults that are difficult to trace."
        points={[
          {
            title: "Unexpected battery drain",
            description: "Accessories drawing power while your vehicle is parked.",
          },
          {
            title: "Damaged wiring and blown fuses",
            description: "Incorrect connections can affect other electrical systems.",
          },
          {
            title: "Audio that never sounds right",
            description: "Poor installation can cause distortion, interference and faults.",
          },
        ]}
      />

      <ServiceChecklistSection service="accessories-audio" />

      <TopTierServicesSection />

      <ServiceStripSection />

      <HomeContactSection />

      <WhyChooseUsSection />
    </>
  );
}