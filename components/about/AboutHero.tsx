import Image from "next/image";

import styles from "./AboutHero.module.css";


/* =========================================================
   CUSTOMER ASSURANCES
========================================================= */

const customerAssurances = [
  "Mobile service at your location",

  "Clear advice and honest communication",

  "Work backed by our performance assurance",
];


/* =========================================================
   ABOUT HERO
========================================================= */

export default function AboutHero() {
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


      {/* DARK OVERLAY */}

      <div
        className={styles.overlay}
        aria-hidden="true"
      />


      {/* APPROVED WEBSITE CONTAINER */}

      <div className={styles.inner}>
        {/* LEFT CONTENT */}

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            THE PEOPLE BEHIND THE SERVICE
          </span>

          <h1>
            Car care that
            <br />
            comes to you.
            <br />

            <span>
              Backed by real accountability.
            </span>
          </h1>

          <p>
            Professional vehicle servicing and repairs at your home
            or workplace, with honest communication, practical
            advice and workmanship you can trust.
          </p>
        </div>


        {/* CUSTOMER ASSURANCE PANEL */}

        <aside
          className={styles.assurancePanel}
          aria-labelledby="about-assurance-heading"
        >
          <span className={styles.panelEyebrow}>
            WHAT YOU CAN EXPECT
          </span>

          <h2 id="about-assurance-heading">
            Service without the runaround.
          </h2>

          <div className={styles.assuranceList}>
            {customerAssurances.map((assurance, index) => (
              <div
                key={assurance}
                className={styles.assuranceItem}
              >
                <span className={styles.assuranceNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.assuranceText}>
                  {assurance}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
