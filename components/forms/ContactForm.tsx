"use client";

import { useContactSubmission } from "@/components/forms/useContactSubmission";

import { useState } from "react";
import Button from "@/components/ui/Button";
import styles from "./ContactForm.module.css";

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

export default function ContactForm() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    handleSubmit,
    isSubmitting,
    submissionError,
  } = useContactSubmission(selectedServices);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="rego">Rego</label>
          <input id="rego" name="rego" type="text" />
        </div>

        <div className={styles.fieldFull}>
          <label htmlFor="address">Home Address</label>
          <input id="address" name="address" type="text" required />
        </div>

        <div className={styles.fieldFull}>
          <label>Select Service</label>

          <div className={styles.multiSelect}>
            <button
              type="button"
              className={styles.multiSelectButton}
              onClick={() => setServicesOpen((current) => !current)}
              aria-expanded={servicesOpen}
            >
              <span>
                {selectedServices.length === 0
                  ? "Select Services"
                  : `${selectedServices.length} service${
                      selectedServices.length > 1 ? "s" : ""
                    } selected`}
              </span>

              <svg
                className={`${styles.arrow} ${
                  servicesOpen ? styles.arrowOpen : ""
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                          name="services"
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
                  className={styles.doneButton}
                  onClick={() => setServicesOpen(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Button type="submit" fullWidth>
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    
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
  );
}