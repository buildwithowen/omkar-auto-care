"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const services = [
  { label: "Shaft, Axle & Wheel Bearing", href: "/shaft-axle-or-wheel-bearing" },
  { label: "Exhaust & Emission Systems", href: "/exhaust-emission-systems" },
  { label: "Clutch & Transmission", href: "/clutch-transmission" },
  { label: "Air Conditioning & Heating", href: "/aircon-heating" },
  { label: "Serpentine & Timing Belt", href: "/serpentine-timing-belt" },
  { label: "Minor Service", href: "/minor-service" },
  { label: "Engine", href: "/engine" },
  { label: "Brake Systems", href: "/brake-systems" },
  { label: "Accessories & Audio", href: "/accessories-audio" },
  {
    label: "Suspension & Shock Absorbers",
    href: "/suspension-shock-absorbers",
  },
  { label: "System Diagnosis & Repair", href: "/system-diagnosis-repair" },
  { label: "Shocks & Struts Replacement", href: "/shocks-struts-replacement" },
  { label: "Brake Repair, Pads & Rotors", href: "/brake-repair-pads-rotors" },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className={styles.mobileMenu}>
      <button
        type="button"
        className={styles.mobileServicesToggle}
        onClick={() => setServicesOpen((prev) => !prev)}
        aria-expanded={servicesOpen}
      >
        <span>Services & Repairs</span>

        <svg
          className={`${styles.mobileArrow} ${
            servicesOpen ? styles.mobileArrowOpen : ""
          }`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {servicesOpen && (
        <div className={styles.mobileServicesList}>
          <Link
            href="/services-repairs"
            className={styles.mobileViewAll}
            onClick={onClose}
          >
            View All Services
          </Link>

          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={styles.mobileServiceLink}
              onClick={onClose}
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}

      <Link href="/faq" className={styles.mobileNavLink} onClick={onClose}>
        FAQ
      </Link>

      <Link href="/about" className={styles.mobileNavLink} onClick={onClose}>
        About
      </Link>

      <Link href="/contact" className={styles.mobileNavLink} onClick={onClose}>
        Contact
      </Link>

      <div className={styles.mobileBottom}>
        <a href="tel:0430729392" className={styles.mobileMenuPhone}>
          0430 729 392
        </a>

        <Link href="/contact" className={styles.mobileCTA} onClick={onClose}>
          Let&apos;s Talk
        </Link>
      </div>
    </div>
  );
}