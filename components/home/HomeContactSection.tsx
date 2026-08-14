import HomeContactForm from "@/components/forms/HomeContactForm";
import styles from "./HomeContactSection.module.css";

export default function HomeContactSection() {
  return (
    <section className={styles.section}>
      {/* BACKGROUND OVERLAY */}
      <div className={styles.overlay} />

      {/* HERO-MATCHED CONTAINER */}
      <div className={styles.inner}>

        {/* HEADING */}
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            <span />
            GET IN TOUCH
            <span />
          </div>

          <h2>
            Leave us a message, and we&apos;ll get back to you as soon as
            possible.
          </h2>

          <p>
            Tell us what your vehicle needs and our team will get back to you
            with the right advice and service options.
          </p>
        </div>

        {/* HOME PAGE FORM — SERVICES ALWAYS VISIBLE */}
        <div className={styles.formWrap}>
          <HomeContactForm />
        </div>

      </div>
    </section>
  );
}