import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Services & Repairs", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Log Book Service", href: "/services/log-book-service" },
  { label: "Major Service", href: "/services/major-service" },
  { label: "Brake Systems", href: "/services/brake-systems" },
  { label: "Auto Electrical", href: "/services/auto-electrical" },
  { label: "Cooling Systems", href: "/services/cooling-systems" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.main}>

          {/* BRAND */}
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logoLink}
              aria-label="OMKAR Autocare Home"
            >
              <Image
                src="/images/omkar-autocare-logo.png"
                alt="OMKAR Autocare"
                width={220}
                height={100}
                className={styles.logo}
              />
            </Link>

            <p className={styles.brandText}>
              Reliable mobile automotive servicing and repairs,
              delivered with experience, care and honest workmanship.
            </p>

            <a
              href="tel:0430729392"
              className={styles.brandPhone}
            >
              0430 729 392
            </a>
          </div>

          {/* COMPANY */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>
              Company
            </span>

            <nav
              className={styles.links}
              aria-label="Footer company navigation"
            >
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>
              Services
            </span>

            <nav
              className={styles.links}
              aria-label="Footer services navigation"
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>
              Contact
            </span>

            <div className={styles.contact}>
              <a href="tel:0430729392">
                0430 729 392
              </a>

              <a href="mailto:info@omkarautocare.com.au">
                info@omkarautocare.com.au
              </a>

              <div className={styles.hours}>
                <p>
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>

                <p>
                  Saturday: 8:00 AM – 2:00 PM
                </p>

                <p>
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottom}>
          <p>
            © 2026 OMKAR Autocare. All Rights Reserved.
          </p>

          <p>
            Website by{" "}
            <a
              href="https://ausmovestaffsolutions.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AUSMOVE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}