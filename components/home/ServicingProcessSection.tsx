"use client";

import Image from "next/image";
import styles from "./ServicingProcessSection.module.css";

const steps = [
  {
    number: "STEP 1",
    title: "Diagnosis",
    description:
      "Our rapid quote system provides a clear understanding of your car's needs and the associated costs.",
  },
  {
    number: "STEP 2",
    title: "Maintenance",
    description:
      "If you approve the estimate and agree to the services, we can begin the mechanical repairs and logbook maintenance.",
  },
  {
    number: "STEP 3",
    title: "Communication",
    description:
      "We pledge to keep you informed at all times. Based on your preference, we can provide updates via SMS or phone call.",
  },
  {
    number: "STEP 4",
    title: "Customer Support",
    description:
      "We ensure you are entirely pleased with our car services. We will also reach out to schedule your next appointment.",
  },
];

export default function ServicingProcessSection() {
  const openContactPopup = () => {
    window.dispatchEvent(new CustomEvent("open-contact-form"));
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* INTRO */}
        <div className={styles.intro}>
          <span className={styles.eyebrow}>OUR PROCESS</span>

          <h2>About the servicing process</h2>

          <p>
            At <strong>OMKAR Autocare</strong>, we strive to get you back on
            the road swiftly. Our efficient process ensures your vehicle will
            be up and running like new in no time.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.layout}>
          {/* LEFT — PROCESS STEPS */}
          <div className={styles.steps}>
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;

              return (
                <div key={step.number} className={styles.step}>
                  {/* SVG VISUAL */}
                  <div className={styles.stepVisual}>
                    <Image
                      src={
                        isLast
                          ? "/icons/process/omkar-autocare-process-arrow.svg"
                          : "/icons/process/omkar-autocare-process-icon.svg"
                      }
                      alt=""
                      width={90}
                      height={150}
                      className={styles.processGraphic}
                    />
                  </div>

                  {/* STEP CONTENT */}
                  <div className={styles.stepContent}>
                    <span className={styles.stepNumber}>{step.number}</span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — IMAGE */}
          <div className={styles.mediaColumn}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/home/omkar-autocare-servicing-process.webp"
                alt="Omkar Autocare servicing process"
                fill
                sizes="(max-width: 767px) 100vw, 46vw"
                className={styles.image}
              />

              <div className={styles.imageAccent} />
            </div>

            {/* PHONE + CTA */}
            <div className={styles.actions}>
              <a href="tel:0430729392" className={styles.phone}>
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