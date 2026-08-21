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
  title: "Brake Systems",

  description: "Hearing squealing or grinding brakes? Omkar Autocare provides professional brake inspections, repairs and replacement services.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   BRAKE SYSTEMS PAGE
========================================================= */

export default function ServicePage() {
  return (
    <>
      <section className={styles.hero}>
      {/* OPTIMISED SERVICE BACKGROUND */}
      <Image
        src="/images/services/omkar-autocare-brake-systems.webp"
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
            Brakes grinding?
            <br />

            <span
              style={{
                color: "#fd8833",
                whiteSpace: "normal",
              }}
            >
              Brake Repairs.
            </span>
          </h1>

          <p>That noise could mean metal-on-metal contact. Waiting may damage your rotors and compromise safety.</p>

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
        imageSrc="/images/services/omkar-autocare-brake-systems.webp"
        imageLabel="BRAKE SYSTEMS"
        eyebrow="DON'T IGNORE THE WARNING SIGNS"
        heading="Your brakes rarely fail without warning."
        description="Brake problems often start with subtle changes in sound, pedal feel or stopping distance. Ignoring them can turn a manageable repair into a serious safety risk."
        points={[
          {
            title: "Squealing or grinding noises",
            description: "Worn brake pads can expose metal and damage your rotors.",
          },
          {
            title: "Soft or unresponsive brake pedal",
            description: "A change in pedal pressure may indicate a fluid or hydraulic issue.",
          },
          {
            title: "Vibration when slowing down",
            description: "Shaking through the steering wheel can point to uneven brake wear.",
          },
        ]}
      />

      <ServiceChecklistSection service="brake-systems" />

      <TopTierServicesSection />

      <ServiceStripSection />

      <HomeContactSection />

      <WhyChooseUsSection />
    </>
  );
}