import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";


/* =========================================================
   COMPANY NAVIGATION
========================================================= */

const companyLinks = [
  {
    label: "Home",
    href: "/",
  },


  {
    label: "FAQ",
    href: "/faq",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];


/* =========================================================
   ACTIVE SERVICE PAGES
========================================================= */

const serviceLinks = [
  {
    label: "Accessories & Audio",
    href: "/accessories-audio",
  },

  {
    label: "Brake Systems",
    href: "/brake-systems",
  },

  {
    label: "Engine",
    href: "/engine",
  },

  {
    label: "Minor Service",
    href: "/minor-service",
  },

  {
    label: "Serpentine & Timing Belt",
    href: "/serpentine-timing-belt",
  },

  {
    label: "Suspension & Shock Absorbers",
    href: "/suspension-shock-absorbers",
  },
];


/* =========================================================
   FOOTER
========================================================= */

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
              aria-label="OMKAR Autocare homepage"
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
              aria-label="Call OMKAR Autocare on 0430 729 392"
            >
              0430 729 392
            </a>
          </div>


          {/* COMPANY NAVIGATION */}

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
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>


          {/* SERVICE NAVIGATION */}

          <div className={styles.column}>
            <span className={styles.columnLabel}>
              Services
            </span>

            <nav
              className={styles.links}
              aria-label="Footer service navigation"
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>


          {/* CONTACT INFORMATION */}

          <div className={styles.column}>
            <span className={styles.columnLabel}>
              Contact
            </span>

            <div className={styles.contact}>
              <a
                href="tel:0430729392"
                aria-label="Call OMKAR Autocare"
              >
                0430 729 392
              </a>

              <a
                href="mailto:info@omkarautocare.com.au"
                aria-label="Email OMKAR Autocare"
              >
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