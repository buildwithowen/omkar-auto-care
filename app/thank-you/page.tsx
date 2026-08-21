import type { Metadata } from "next";

import Image from "next/image";

import Link from "next/link";

import styles from "./page.module.css";


/* =========================================================
   PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Enquiry Received",

  description:
    "Your enquiry has been received by OMKAR Autocare.",

  robots: {
    index: false,
    follow: false,
  },
};


/* =========================================================
   THANK YOU PAGE
========================================================= */

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        {/* COMPANY LOGO */}

        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Return to OMKAR Autocare homepage"
        >
          <Image
            src="/images/omkar-autocare-logo.png"
            alt="OMKAR Autocare"
            width={260}
            height={114}
            priority
            className={styles.logo}
          />
        </Link>


        {/* SUCCESS INDICATOR */}

        <div
          className={styles.successMark}
          aria-hidden="true"
        >
          <span className={styles.checkmark} />
        </div>


        {/* CONFIRMATION */}

        <span className={styles.eyebrow}>
          ENQUIRY RECEIVED
        </span>

        <h1>
          Your request
          <br />

          <span>
            has been received.
          </span>
        </h1>

        <p className={styles.message}>
          Thank you for contacting OMKAR Autocare.
          We will review your enquiry and get back to you
          as soon as possible.
        </p>


        {/* URGENT PHONE CONTACT */}

        <p className={styles.urgent}>
          Need help sooner? Call{" "}

          <a href="tel:0430729392">
            0430 729 392
          </a>
        </p>


        {/* QUIET HOMEPAGE LINK */}

        <Link
          href="/"
          className={styles.homeLink}
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
