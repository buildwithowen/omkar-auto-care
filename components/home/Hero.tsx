import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import ServiceProcessBar from "@/components/home/ServiceProcessBar";
import styles from "./Hero.module.css";

const GOOGLE_REVIEWS_URL = "https://share.google/r8DdLR7WgoDlcMfvd";
const GOOGLE_RATING = "5.0";
const GOOGLE_REVIEW_COUNT = 71;

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* OPTIMIZED HERO BACKGROUND */}
      <Image
        src="/images/hero/omkar-autocare-hero-bg.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={60}
        sizes="100vw"
        className={styles.heroBackground}
      />

      <div className={styles.overlay} />

      <div className={styles.inner}>
        {/* LEFT SIDE */}
        <div className={styles.content}>
          <h1>
            Your vehicle service,
            <br />
            right at your door.
          </h1>

          <p>
            With <span>OMKAR Autocare</span>, you can rest assured that your car
            service is being handled by experienced professionals dedicated to
            providing quality care and maintenance.
          </p>

          {/* GOOGLE REVIEWS */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviews}
            aria-label={`Rated ${GOOGLE_RATING} out of 5 based on ${GOOGLE_REVIEW_COUNT} Google reviews. Open Google Business Profile.`}
          >
            <span className={styles.googleWordmark} aria-hidden="true">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </span>

            <span className={styles.reviewTop}>
              <span className={styles.rating}>{GOOGLE_RATING}</span>

              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
            </span>

            <span className={styles.reviewCaption}>
              Based on{" "}
              <span className={styles.reviewCount}>{GOOGLE_REVIEW_COUNT}</span>{" "}
              Google reviews
            </span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>

      {/* BOTTOM SERVICE BAR */}
      <ServiceProcessBar />
    </section>
  );
}