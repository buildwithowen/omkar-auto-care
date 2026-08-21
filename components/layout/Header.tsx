"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./Header.module.css";


/* =========================================================
   APPROVED SERVICES
========================================================= */

const services = [
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


export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const openContactPopup = () => {
    setMobileOpen(false);

    window.dispatchEvent(
      new CustomEvent("open-contact-form")
    );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* =====================================================
            TOP ROW
        ===================================================== */}

        <div className={styles.topRow}>

          {/* LOGO + TAGLINE */}

          <Link
            href="/"
            className={styles.brand}
            onClick={closeMobileMenu}
          >
            <div className={styles.logoWrap}>
              <Image
                src="/images/omkar-autocare-logo.png"
                alt="Omkar Autocare"
                width={320}
                height={140}
                priority
                className={styles.logo}
              />
            </div>

            <div className={styles.tagline}>
              &quot;Putting the{" "}
              <span>CARE</span>{" "}
              into your car!&quot;
            </div>
          </Link>


          {/* PHONE + LET'S TALK */}

          <div className={styles.topActions}>
            <a
              href="tel:0430729392"
              className={styles.phone}
            >
              <span className={styles.phoneIcon}>
                ☎
              </span>

              <span>
                0430 729 392
              </span>
            </a>

            <button
              type="button"
              className={styles.cta}
              onClick={openContactPopup}
            >
              Let&apos;s Talk
            </button>
          </div>


          {/* MOBILE HAMBURGER */}

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => {
              setMobileOpen((prev) => !prev);

              if (mobileOpen) {
                setMobileServicesOpen(false);
              }
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>


        {/* =====================================================
            DESKTOP / TABLET NAV
        ===================================================== */}

        <nav className={styles.nav}>

          <div
            className={styles.servicesItem}
            onMouseEnter={() =>
              setServicesOpen(true)
            }
            onMouseLeave={() =>
              setServicesOpen(false)
            }
          >
            <button
              type="button"
              className={styles.navButton}
              onClick={() =>
                setServicesOpen((prev) => !prev)
              }
              aria-expanded={servicesOpen}
            >
              Services & Repairs

              <span className={styles.chevron}>
                ⌄
              </span>
            </button>


            {servicesOpen && (
              <div className={styles.dropdown}>
<div className={styles.dropdownGrid}>

                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={styles.dropdownLink}
                      onClick={() =>
                        setServicesOpen(false)
                      }
                    >
                      {service.label}
                    </Link>
                  ))}

                </div>

              </div>
            )}

          </div>


          <Link
            href="/faq"
            className={styles.navLink}
          >
            FAQ
          </Link>

          <Link
            href="/about"
            className={styles.navLink}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={styles.navLink}
          >
            Contact
          </Link>

        </nav>


        {/* =====================================================
            MOBILE DROPDOWN MENU
        ===================================================== */}

        {mobileOpen && (
          <div className={styles.mobileMenu}>

            {/* SERVICES */}

            <button
              type="button"
              className={styles.mobileServicesToggle}
              onClick={() =>
                setMobileServicesOpen((prev) => !prev)
              }
              aria-expanded={mobileServicesOpen}
            >
              <span>
                Services & Repairs
              </span>

              <span
                className={`${styles.mobileArrow} ${
                  mobileServicesOpen
                    ? styles.mobileArrowOpen
                    : ""
                }`}
              >
                ▼
              </span>
            </button>


            {/* MOBILE SERVICES LIST */}

            {mobileServicesOpen && (
              <div className={styles.mobileServicesList}>
{services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={styles.mobileServiceLink}
                    onClick={closeMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}

              </div>
            )}


            {/* FAQ */}

            <Link
              href="/faq"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>


            {/* ABOUT */}

            <Link
              href="/about"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}
            >
              About
            </Link>


            {/* CONTACT */}

            <Link
              href="/contact"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>


            {/* MOBILE BOTTOM CTA */}

            <div className={styles.mobileBottom}>

              <a
                href="tel:0430729392"
                className={styles.mobileMenuPhone}
              >
                ☎ 0430 729 392
              </a>

              <button
                type="button"
                className={styles.mobileCTA}
                onClick={openContactPopup}
              >
                Let&apos;s Talk
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}