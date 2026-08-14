import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import ServiceProcessBar from "@/components/home/ServiceProcessBar";
import styles from "./Hero.module.css";

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
          <div className={styles.reviews}>
            <div className={styles.reviewTop}>
              <Image
                src="/icons/hero/google-logo.svg"
                alt="Google"
                width={28}
                height={28}
                className={styles.googleLogo}
              />

              <div className={styles.stars} aria-label="5 star rating">
                ★★★★★
              </div>
            </div>

            <p>
              5-star rating on Google, based on over{" "}
              <a
                href="https://maps.app.goo.gl/GrVfMc33fuNNV17c9"
                target="_blank"
                rel="noopener noreferrer"
              >
                70 reviews
              </a>
            </p>
          </div>
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