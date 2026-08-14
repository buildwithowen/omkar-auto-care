"use client";

import Image from "next/image";
import styles from "./ExpertServicesSection.module.css";

export default function ExpertServicesSection() {
  const openContactPopup = () => {
    window.dispatchEvent(new CustomEvent("open-contact-form"));
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* =====================================================
            ROW 1 — EXPERT AUTO CARE
        ===================================================== */}

        <div className={styles.row}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              EXPERT AUTO CARE
            </span>

            <h2>
              Expert Auto Care In Australia:
              <br />
              Quality Workmanship From Trusted Mechanics
            </h2>

            <div className={styles.copy}>
              <p>
                <strong>OMKAR Autocare</strong> is committed to providing
                top-notch service to all of our customers. Our team possesses
                the skills and expertise to manage a wide range of car repair
                and maintenance services.
              </p>

              <p>
                We use only the highest quality parts and tools to ensure that
                every repair is performed to the highest standards. Our
                commitment to customer satisfaction means that we will always
                take the time to explain any repairs or services that we
                recommend and answer any questions that you may have.
              </p>

              <p>
                With our focus on quality service, affordable pricing, and
                personalised attention, you can trust us to keep your vehicle
                running smoothly for years to come.
              </p>
            </div>

            <div className={styles.actions}>
              <a
                href="tel:0430729392"
                className={styles.phone}
              >
                <span className={styles.phoneIcon}>☎</span>
                <span>0430 729 392</span>
              </a>

              <button
                type="button"
                className={styles.cta}
                onClick={openContactPopup}
              >
                Book a Service
              </button>
            </div>
          </div>


          {/* =====================================================
              IMAGE 1
          ===================================================== */}

          <div className={styles.imageSide}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/home/expert-auto-care.webp"
                alt="Professional automotive servicing at Omkar Autocare"
                fill
                sizes="(max-width: 767px) 100vw, 42vw"
                className={styles.image}
              />

              <div className={styles.imageAccent} />
            </div>
          </div>
        </div>


        {/* =====================================================
            ROW 2 — SERVICES & REPAIRS
        ===================================================== */}

        <div className={`${styles.row} ${styles.rowReverse}`}>

          {/* =====================================================
              IMAGE 2
          ===================================================== */}

          <div className={styles.imageSide}>
            <div className={styles.imageWrapLarge}>
              <Image
                src="/images/home/services-repairs.webp"
                alt="Vehicle inspection and repair services by Omkar Autocare"
                fill
                sizes="(max-width: 767px) 100vw, 48vw"
                className={styles.image}
              />

              <div className={styles.imageAccent} />
            </div>
          </div>


          {/* =====================================================
              CONTENT 2
          ===================================================== */}

          <div className={styles.content}>
            <span className={styles.eyebrow}>
              SERVICES & REPAIRS
            </span>

            <h2>
              Our Services And Repairs
            </h2>

            <div className={styles.copy}>
              <p>
                <strong>OMKAR Autocare</strong> is a trusted automotive service
                provider offering comprehensive car servicing, repairs and
                parts installation by experienced mechanics.
              </p>

              <p>
                Our extensive range of services helps ensure your vehicle
                remains roadworthy while maintaining the care and attention it
                deserves.
              </p>
            </div>

            <div className={styles.commitment}>
              <p className={styles.commitmentTitle}>
                In our work, we commit to:
              </p>

              <ul>
                <li>
                  Consistently adhere to service guidelines to help maintain
                  manufacturer requirements.
                </li>

                <li>
                  Offer competitive pricing without compromising workmanship.
                </li>

                <li>
                  Ensure every customer receives a professional and remarkable
                  service experience.
                </li>
              </ul>
            </div>

            <div className={styles.actions}>
              <a
                href="tel:0430729392"
                className={styles.phone}
              >
                <span className={styles.phoneIcon}>☎</span>
                <span>0430 729 392</span>
              </a>

              <button
                type="button"
                className={styles.cta}
                onClick={openContactPopup}
              >
                Book a Service
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}