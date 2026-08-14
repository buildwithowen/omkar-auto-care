import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ContactForm from "@/components/forms/ContactForm";
import styles from "@/components/shared/TemporaryServicePage.module.css";

export const metadata: Metadata = {
  title: "Contact | Omkar Autocare",
  description:
    "Contact Omkar Autocare for vehicle servicing, repairs and automotive enquiries.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.glow} />

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            GET IN TOUCH
          </span>

          <h1>How can we help with your car?</h1>

          <p>
            Tell us what your vehicle needs and our team will get back to you
            as soon as possible.
          </p>

          <div className={styles.contactFormWrap}>
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
