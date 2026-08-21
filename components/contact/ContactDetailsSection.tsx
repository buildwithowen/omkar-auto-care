import styles from "./ContactDetailsSection.module.css";


/* =========================================================
   CONTACT DETAILS SECTION
========================================================= */

export default function ContactDetailsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT INTRODUCTION */}

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span
              className={styles.eyebrowLine}
              aria-hidden="true"
            />

            SPEAK TO SOMEONE WHO UNDERSTANDS
          </span>

          <h2>
            Tell us what the vehicle is doing.
            <br />

            <span>
              We will take it from there.
            </span>
          </h2>

          <p className={styles.description}>
            Whether you have noticed a warning light, an unusual
            noise or a service that is overdue, getting the right
            advice early can prevent a minor issue becoming a
            major repair.
          </p>
        </div>


        {/* NUMBERED CONTACT INFORMATION */}

        <div className={styles.detailsList}>
          <div className={styles.detailItem}>
            <span className={styles.itemNumber}>
              01
            </span>

            <div className={styles.itemContent}>
              <span className={styles.itemLabel}>
                CALL OMKAR AUTOCARE
              </span>

              <a
                href="tel:0430729392"
                className={styles.phoneLink}
              >
                0430 729 392
              </a>

              <p>
                Speak directly with our team about your vehicle,
                servicing needs or repair concerns.
              </p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.itemNumber}>
              02
            </span>

            <div className={styles.itemContent}>
              <span className={styles.itemLabel}>
                MOBILE AUTOMOTIVE SERVICE
              </span>

              <h3>
                We come to your location.
              </h3>

              <p>
                Convenient vehicle servicing and repairs at your
                home, workplace or another suitable location.
              </p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.itemNumber}>
              03
            </span>

            <div className={styles.itemContent}>
              <span className={styles.itemLabel}>
                SERVICING, REPAIRS & DIAGNOSIS
              </span>

              <h3>
                Explain the problem. We will assess it.
              </h3>

              <p>
                From routine maintenance to unusual noises and
                electrical faults, we will help identify the
                right next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
