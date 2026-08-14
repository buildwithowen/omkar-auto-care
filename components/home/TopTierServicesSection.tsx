import Image from "next/image";
import Link from "next/link";
import styles from "./TopTierServicesSection.module.css";

const services = [
  {
    title: "Accessories & Audio",
    href: "/accessories-audio",
    image: "/images/services/omkar-autocare-accessories-audio.webp",
    alt: "Accessories and audio service at Omkar Autocare",
  },
  {
    title: "Brake Systems",
    href: "/brake-systems",
    image: "/images/services/omkar-autocare-brake-systems.webp",
    alt: "Brake system servicing at Omkar Autocare",
  },
  {
    title: "Engine",
    href: "/engine",
    image: "/images/services/omkar-autocare-engine-repair.webp",
    alt: "Engine repair and servicing at Omkar Autocare",
  },
  {
    title: "Minor Service",
    href: "/minor-service",
    image: "/images/services/omkar-autocare-minor-service.webp",
    alt: "Minor vehicle service at Omkar Autocare",
  },
  {
    title: "Serpentine & Timing Belt",
    href: "/serpentine-timing-belt",
    image: "/images/services/omkar-autocare-serpentine-timing-belt.webp",
    alt: "Serpentine and timing belt service at Omkar Autocare",
  },
  {
    title: "Suspension & Shock Absorbers",
    href: "/suspension-shock-absorbers",
    image:
      "/images/services/omkar-autocare-suspension-shock-absorbers.webp",
    alt: "Suspension and shock absorber service at Omkar Autocare",
  },
];

export default function TopTierServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            TOP-TIER COMPLETE SERVICES
          </span>

          <p>
            <strong>OMKAR Autocare</strong> can handle everything your car needs.
            While we&apos;re known for servicing vehicles, we also perform a wide
            array of repairs. The technician you speak to over the phone will be
            the same expert who arrives to work on your car. Not sure what your
            car requires? We can guide you through the process and provide expert
            advice. With extensive experience, OMKAR Autocare can perform most
            repairs on any make or model. Our goal is to make the service as
            convenient for you as possible.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.image}
                />

                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardFooter}>
                <h3>{service.title}</h3>

                <span className={styles.arrow}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}