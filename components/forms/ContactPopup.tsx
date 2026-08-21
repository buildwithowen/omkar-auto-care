"use client";

import { useContactSubmission } from "@/components/forms/useContactSubmission";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactPopup.module.css";

const services = [
  "Accessories & Audio",
  "Brake Systems",
  "Engine",
  "Minor Service",
  "Serpentine & Timing Belt",
  "Suspension & Shock Absorbers",
  "Aircon & Heating",
  "Clutch & Transmission",
  "Exhaust & Emission Systems",
  "Log Book Service",
  "Road Worthy & Pre-purchase Inspection",
  "Shaft Axle or Wheel Bearing",
  "Auto Electrical",
  "Cooling Systems",
  "Ignition, Start & Charging System",
  "Major Service",
  "Safety Check Inspection",
];

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    handleSubmit,
    isSubmitting,
    submissionError,
  } = useContactSubmission(selectedServices);

  const selectorRef = useRef<HTMLDivElement>(null);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  useEffect(() => {
    const openPopup = () => setOpen(true);

    window.addEventListener("open-contact-form", openPopup);

    return () => {
      window.removeEventListener("open-contact-form", openPopup);
    };
  }, []);

  useEffect(() => {
    const handleOutside = (event: MouseEvent | TouchEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={() => setOpen(false)}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={() => setOpen(false)}
          aria-label="Close contact form"
        >
          ×
        </button>

        <div className={styles.heading}>
          <span>GET IN TOUCH</span>

          <h2>How can we help with your car?</h2>

          <p>
            Tell us what your vehicle needs and we’ll get back to you as soon
            as possible.
          </p>
        </div>

        <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="popup-name">Full Name</label>
              <input id="popup-name" name="fullName" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="popup-phone">Contact Number</label>
              <input id="popup-phone" name="contactNumber" type="tel" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="popup-email">Email Address</label>
              <input id="popup-email" name="email" type="email" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="popup-rego">Rego</label>
              <input id="popup-rego" name="rego" type="text" />
            </div>

            <div className={styles.fieldFull}>
              <label htmlFor="popup-address">Home Address</label>
              <input id="popup-address" name="address" type="text" required />
            </div>

            <div className={styles.fieldFull}>
              <label>Select Service</label>

              <div
                ref={selectorRef}
                className={styles.multiSelect}
              >
                <button
                  type="button"
                  className={styles.multiSelectButton}
                  onClick={() => setServicesOpen((current) => !current)}
                >
                  <span>
                    {selectedServices.length === 0
                      ? "Select Services"
                      : `${selectedServices.length} service${
                          selectedServices.length > 1 ? "s" : ""
                        } selected`}
                  </span>

                  <span
                    className={`${styles.arrow} ${
                      servicesOpen ? styles.arrowOpen : ""
                    }`}
                  >
                   ⌄
                  </span>
                </button>

                {servicesOpen && (
                  <div className={styles.serviceDropdown}>
                    <div className={styles.serviceGrid}>
                      {services.map((service) => {
                        const checked = selectedServices.includes(service);

                        return (
                          <label
                            key={service}
                            className={`${styles.serviceOption} ${
                              checked ? styles.serviceOptionSelected : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              value={service}
                              checked={checked}
                              onChange={() => toggleService(service)}
                            />

                            <span>{service}</span>
                          </label>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      className={styles.done}
                      onClick={() => setServicesOpen(false)}
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        
      {submissionError && (
        <p
          role="alert"
          style={{
            margin: "12px 0 0",
            color: "#ffb4a8",
            fontSize: "12px",
            lineHeight: "1.6",
          }}
        >
          {submissionError}
        </p>
      )}

    </form>
      </div>
    </div>
  );
}