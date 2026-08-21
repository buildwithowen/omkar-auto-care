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
  title: "Engine",

  description: "Engine warning light, rough idling or loss of power? Omkar Autocare provides expert engine diagnostics, servicing and repairs.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   ENGINE PAGE
========================================================= */

export default function ServicePage() {
  return (
    <>
      <section className={styles.hero}>
      {/* OPTIMISED SERVICE BACKGROUND */}
      <Image
        src="/images/services/omkar-autocare-engine-repair.webp"
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
            Warning light on?
            <br />

            <span
              style={{
                color: "#fd8833",
                whiteSpace: "normal",
              }}
            >
              Engine Repairs.
            </span>
          </h1>

          <p>Misfires, overheating or power loss can quickly turn into serious engine damage.</p>

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
        imageSrc="/images/services/omkar-autocare-engine-repair.webp"
        imageLabel="ENGINE DIAGNOSTICS"
        eyebrow="FIND THE FAULT EARLY"
        heading="Small engine problems don't stay small."
        description="An engine warning light, unusual noise or loss of power can indicate a developing issue. Early diagnosis can help prevent more extensive damage."
        points={[
          {
            title: "Dashboard warning lights",
            description: "A warning light can indicate faults requiring proper diagnostics.",
          },
          {
            title: "Rough idling or engine misfires",
            description: "Irregular running may indicate ignition, fuel or airflow problems.",
          },
          {
            title: "Overheating or unexpected power loss",
            description: "These symptoms can signal issues that should be inspected promptly.",
          },
        ]}
      />

      <ServiceChecklistSection service="engine" />

      <TopTierServicesSection />

      <ServiceStripSection />

      <HomeContactSection />

      <WhyChooseUsSection />
    </>
  );
}