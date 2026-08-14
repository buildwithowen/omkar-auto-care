import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceStripSection.module.css";

const services = [
  {
    title: "Auto Electrical",
    description:
      "Repair or replace faulty wiring, fuses, and electrical components.",
    href: "/auto-electrical",
    icon: "/icons/services/omkar-autocare-auto-electrical.svg",
  },
  {
    title: "Cooling Systems",
    description:
      "Inspect, repair, or replace cooling system components.",
    href: "/cooling-systems",
    icon: "/icons/services/omkar-autocare-cooling-systems.svg",
  },
  {
    title: "Ignition, Start & Charging System",
    description:
      "Fix ignition, starter, or charging system issues.",
    href: "/ignition-start-charging-system",
    icon: "/icons/services/omkar-autocare-ignition-start-charging.svg",
  },
  {
    title: "Major Service",
    description:
      "Perform maintenance and inspections for optimal vehicle performance.",
    href: "/major-service",
    icon: "/icons/services/omkar-autocare-major-service.svg",
  },
  {
    title: "Safety Check Inspection",
    description:
      "Assess and ensure the vehicle meets safety standards for safe operation.",
    href: "/safety-check-inspection",
    icon: "/icons/services/omkar-autocare-safety-check-inspection.svg",
  },
];

export default function ServiceStripSection() {
  return (
    <section className={styles.section}>
      <div className={styles.services}>
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className={styles.service}
          >
            <div className={styles.icon}>
              <Image
                src={service.icon}
                alt=""
                width={64}
                height={64}
                className={styles.iconImage}
              />
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </Link>
        ))}
      </div>

      <a href="tel:0430729392" className={styles.phoneCta}>
        <span className={styles.phoneIcon}>☎</span>
        <span>0430 729 392</span>
      </a>
    </section>
  );
}