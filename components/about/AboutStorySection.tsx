import Image from "next/image";

import styles from "./AboutStorySection.module.css";


/* =========================================================
   ABOUT STORY SECTION
========================================================= */

export default function AboutStorySection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* AUTOMOTIVE IMAGE */}

        <div className={styles.imageWrap}>
          <Image
            src="/images/services/omkar-autocare-engine-repair.webp"
            alt="Professional automotive servicing and repairs by OMKAR Autocare"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className={styles.image}
          />

          <div
            className={styles.imageOverlay}
            aria-hidden="true"
          />

          <span className={styles.imageLabel}>
            MOBILE AUTOMOTIVE CARE
          </span>
        </div>


        {/* COMPANY STORY */}

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span
              className={styles.eyebrowLine}
              aria-hidden="true"
            />

            WHY OMKAR AUTOCARE
          </span>

          <h2>
            Professional servicing, without putting your day on hold.
          </h2>

          <p className={styles.description}>
            Finding time for a workshop visit should not mean ignoring
            your vehicle’s maintenance. OMKAR Autocare makes servicing
            simpler by bringing dependable automotive care directly
            to your home or workplace.
          </p>

          <p className={styles.description}>
            Whether your vehicle needs routine maintenance, fault
            diagnosis or urgent repairs, we focus on clear
            explanations, practical advice and workmanship you can
            rely on.
          </p>

          <div className={styles.commitments}>
            <div className={styles.commitment}>
              <span className={styles.commitmentNumber}>
                01
              </span>

              <div>
                <h3>
                  We come to you
                </h3>

                <p>
                  Professional vehicle care wherever it is most
                  convenient.
                </p>
              </div>
            </div>

            <div className={styles.commitment}>
              <span className={styles.commitmentNumber}>
                02
              </span>

              <div>
                <h3>
                  We explain the problem
                </h3>

                <p>
                  Straightforward advice so you understand what your
                  vehicle needs.
                </p>
              </div>
            </div>

            <div className={styles.commitment}>
              <span className={styles.commitmentNumber}>
                03
              </span>

              <div>
                <h3>
                  We stand behind the work
                </h3>

                <p>
                  A clear performance assurance when something needs
                  further attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
