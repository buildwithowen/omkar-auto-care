import Image from "next/image";

import ContactForm from "@/components/forms/ContactForm";

import reviewStyles from "@/components/home/Hero.module.css";

import styles from "./ContactHero.module.css";


/* =========================================================
   GOOGLE REVIEWS
========================================================= */

const GOOGLE_REVIEWS_URL =
  "https://share.google/r8DdLR7WgoDlcMfvd";

const GOOGLE_RATING = "5.0";

const GOOGLE_REVIEW_COUNT = 71;


/* =========================================================
   CONTACT HERO
========================================================= */

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      {/* OPTIMISED BACKGROUND IMAGE */}

      <Image
        src="/images/hero/omkar-autocare-hero-bg.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={60}
        sizes="100vw"
        className={styles.backgroundImage}
      />


      {/* DARK BACKGROUND OVERLAY */}

      <div
        className={styles.overlay}
        aria-hidden="true"
      />


      {/* APPROVED WEBSITE CONTAINER */}

      <div className={styles.inner}>
        {/* LEFT CONTENT */}

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            GET THE RIGHT HELP, WITHOUT THE RUNAROUND
          </span>

          <h1>
            Car trouble will
            <br />
            not fix itself.
            <br />

            <span>
              Let us sort it out.
            </span>
          </h1>

          <p>
            Tell us what is happening with your vehicle and we will
            help you work out the right next step. Straightforward
            advice, dependable repairs and mobile servicing that
            comes to you.
          </p>


          {/* GOOGLE REVIEWS */}

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={reviewStyles.reviews}
            aria-label={
              "Rated " +
              GOOGLE_RATING +
              " out of 5 based on " +
              GOOGLE_REVIEW_COUNT +
              " Google reviews. Open Google Business Profile."
            }
          >
            <span
              className={reviewStyles.googleWordmark}
              aria-hidden="true"
            >
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </span>

            <span className={reviewStyles.reviewTop}>
              <span className={reviewStyles.rating}>
                {GOOGLE_RATING}
              </span>

              <span
                className={reviewStyles.stars}
                aria-hidden="true"
              >
                ★★★★★
              </span>
            </span>

            <span className={reviewStyles.reviewCaption}>
              Based on{" "}

              <span className={reviewStyles.reviewCount}>
                {GOOGLE_REVIEW_COUNT}
              </span>

              {" "}Google reviews
            </span>
          </a>
        </div>


        {/* EXISTING CONTACT FORM */}

        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
