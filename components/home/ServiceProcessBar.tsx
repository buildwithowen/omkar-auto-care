"use client";

import Link from "next/link";
import styles from "./ServiceProcessBar.module.css";

export default function ServiceProcessBar() {
  const openContactPopup = () => {
    window.dispatchEvent(
      new CustomEvent("open-contact-form")
    );
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>

        {/* INTRO */}
        <div className={styles.intro}>
          About the servicing
          <br />
          process
        </div>

        {/* SERVICE CARDS */}
        <div className={styles.items}>

          <button
            type="button"
            className={styles.item}
            onClick={openContactPopup}
          >
            <img
              src="/icons/diagnosis.svg"
              alt=""
              className={styles.icon}
            />
            <span>Diagnosis</span>
          </button>

          <button
            type="button"
            className={styles.item}
            onClick={openContactPopup}
          >
            <img
              src="/icons/maintenance.svg"
              alt=""
              className={styles.icon}
            />
            <span>Maintenance</span>
          </button>

          <button
            type="button"
            className={styles.item}
            onClick={openContactPopup}
          >
            <img
              src="/icons/interaction.svg"
              alt=""
              className={styles.icon}
            />
            <span>Interaction</span>
          </button>

          <button
            type="button"
            className={styles.item}
            onClick={openContactPopup}
          >
            <img
              src="/icons/customer-support.svg"
              alt=""
              className={styles.icon}
            />
            <span>Customer Support</span>
          </button>

        </div>

        {/* GET PRICES — DIRECT TO CONTACT */}
        <div className={styles.cta}>
          <Link
            href="/contact"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Get Prices
          </Link>
        </div>

      </div>
    </div>
  );
}