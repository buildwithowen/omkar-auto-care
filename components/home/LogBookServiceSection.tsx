import Image from "next/image";
import styles from "./LogBookServiceSection.module.css";

const benefits = [
  {
    title: "Maintaining Manufacturer Warranty",
    description:
      "Adhering to the prescribed service intervals helps ensure your warranty remains valid.",
  },
  {
    title: "Enhancing Vehicle Performance",
    description:
      "Regular maintenance keeps your vehicle running efficiently and reduces the likelihood of unexpected breakdowns.",
  },
  {
    title: "Increasing Resale Value",
    description:
      "A well-maintained vehicle with documented service history can command a higher resale value.",
  },
];

export default function LogBookServiceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT IMAGE */}
        <div className={styles.mediaColumn}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/home/omkar-autocare-log-book-service.webp"
              alt="Log book servicing and vehicle maintenance documentation at Omkar Autocare"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1100px) 46vw, 44vw"
              className={styles.image}
            />

            <div className={styles.imageAccent} />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            LOG BOOK SERVICING
          </span>

          <h2>
            What is Log Book Service?
          </h2>

          <p className={styles.intro}>
            Log Book Service involves following the specific maintenance
            schedule outlined in your vehicle&apos;s log book or owner&apos;s
            manual. This scheduled maintenance is essential for:
          </p>

          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={styles.benefit}
              >
                <div
                  className={styles.check}
                  aria-hidden="true"
                >
                  ✓
                </div>

                <div className={styles.benefitContent}>
                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}