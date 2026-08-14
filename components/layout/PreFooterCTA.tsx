import Link from "next/link";
import styles from "./PreFooterCTA.module.css";

export default function PreFooterCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            READY FOR YOUR NEXT SERVICE?
          </span>

          <h2>
            Get in touch with OMKAR Autocare today
          </h2>

          <p>
            Contact us for a custom quote or to discuss your servicing needs.
            We&apos;re here to make vehicle care simple, efficient, and
            stress-free.
          </p>

          <div className={styles.actions}>
            <a
              href="tel:0430729392"
              className={styles.phone}
            >
              <span className={styles.phoneIcon}>☎</span>
              0430 729 392
            </a>

            <Link
              href="/contact"
              className={styles.button}
            >
              Book a Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}