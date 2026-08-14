import Link from "next/link";
import Header from "@/components/layout/Header";
import styles from "./TemporaryServicePage.module.css";

type TemporaryServicePageProps = {
  title: string;
};

export default function TemporaryServicePage({
  title,
}: TemporaryServicePageProps) {
  return (
    <>
      {/* DEFAULT SITE HEADER */}
      <Header />

      <main className={styles.page}>
        <div className={styles.glow} />

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            OMKAR AUTOCARE
          </span>

          <h1>{title}</h1>

          <p>
            We&apos;re currently updating this service page to give you a better
            experience. Our team is still available and ready to help with your
            vehicle.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primary}>
              Back to Home
            </Link>

            <a
              href="tel:0430729392"
              className={styles.secondary}
            >
              Call 0430 729 392
            </a>
          </div>
        </div>
      </main>
    </>
  );
}