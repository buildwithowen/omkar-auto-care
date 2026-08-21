import type { Metadata } from "next";
import Image from "next/image";

import ContactForm from "@/components/forms/ContactForm";
import ServiceProcessBar from "@/components/home/ServiceProcessBar";

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

  description:
    "Professional car accessories and audio installation by Omkar Autocare. Upgrade your vehicle with quality audio systems, accessories and expert mobile service.",

  robots: {
    index: false,
    follow: true,
  },
};


/* =========================================================
   ACCESSORIES & AUDIO PAGE
========================================================= */

export default function AccessoriesAudioPage() {
  return (
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
            Elevate your drive.
            <br />
            <span style={{ color: "#fd8833" }}>
              Accessories & Audio.
            </span>
          </h1>

          <p>
            Upgrade your vehicle with quality accessories and professionally
            installed audio systems from{" "}
            <span>OMKAR Autocare</span>.
          </p>

          {/* GOOGLE REVIEWS */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviews}
            aria-label={`Rated ${GOOGLE_RATING} out of 5 based on ${GOOGLE_REVIEW_COUNT} Google reviews. Open Google Business Profile.`}
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
  );
}