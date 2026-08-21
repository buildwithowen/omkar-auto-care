"use client";

import { useContactSubmission } from "@/components/forms/useContactSubmission";

import { useState } from "react";
import Button from "@/components/ui/Button";
import styles from "./HomeContactForm.module.css";

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

export default function HomeContactForm() {
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

        {/* FULL NAME */}
        <div className={styles.field}>
          <label htmlFor="home-fullName">
            Full Name
          </label>

          <input
            id="home-fullName"
            name="fullName"
            type="text"
            required
          />
        </div>


        {/* CONTACT NUMBER */}
        <div className={styles.field}>
          <label htmlFor="home-contactNumber">
            Contact Number
          </label>

          <input
            id="home-contactNumber"
            name="contactNumber"
            type="tel"
            required
          />
        </div>


        {/* EMAIL */}
        <div className={styles.field}>
          <label htmlFor="home-email">
            Email Address
          </label>

          <input
            id="home-email"
            name="email"
            type="email"
            required
          />
        </div>


        {/* REGO */}
        <div className={styles.field}>
          <label htmlFor="home-rego">
            Rego
          </label>

          <input
            id="home-rego"
            name="rego"
            type="text"
          />
        </div>


        {/* ADDRESS */}
        <div className={styles.fieldFull}>
          <label htmlFor="home-address">
            Home Address
          </label>

          <input
            id="home-address"
            name="address"
            type="text"
            required
          />
        </div>


        {/* SERVICES */}
        <div className={styles.servicesField}>
          <div className={styles.serviceLabel}>
            Service required
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const checked =
                selectedServices.includes(service);

              return (
                <label
                  key={service}
                  className={`${styles.serviceOption} ${
                    checked ? styles.selected : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={checked}
                    onChange={() =>
                      toggleService(service)
                    }
                  />

                  <span>{service}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.submitWrap}>
        <Button
          type="submit"
          fullWidth
        >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
      </div>
    
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