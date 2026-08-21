import Image from "next/image";

import styles from "./ServiceDetailsSection.module.css";


/* =========================================================
   TYPES
========================================================= */

type ServicePoint = {
  title: string;
  description: string;
};

type ServiceDetailsSectionProps = {
  imageSrc: string;
  imageLabel: string;
  eyebrow: string;
  heading: string;
  description: string;
  points: ServicePoint[];
};


/* =========================================================
   REUSABLE SERVICE DETAILS SECTION
========================================================= */

export default function ServiceDetailsSection({
  imageSrc,
  imageLabel,
  eyebrow,
  heading,
  description,
  points,
}: ServiceDetailsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* SERVICE IMAGE */}
        <div className={styles.imageWrap}>
          <Image
            src={imageSrc}
            alt={imageLabel}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 760px"
            quality={75}
            className={styles.image}
          />

          <div className={styles.imageOverlay} />

          <span className={styles.imageLabel}>
            {imageLabel}
          </span>
        </div>

        {/* SERVICE INFORMATION */}
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span
              className={styles.eyebrowLine}
              aria-hidden="true"
            />

            <span>{eyebrow}</span>
          </div>

          <h2>{heading}</h2>

          <p className={styles.description}>
            {description}
          </p>

          <div className={styles.points}>
            {points.map((point, index) => (
              <div
                key={point.title}
                className={styles.point}
              >
                <span className={styles.pointNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={styles.pointContent}>
                  <h3>{point.title}</h3>

                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
