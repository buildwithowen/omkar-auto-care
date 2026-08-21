import Image from "next/image";

import styles from "./FAQHero.module.css";


/* =========================================================
   POPULAR QUESTIONS
========================================================= */

const popularQuestions = [
  "How does mobile servicing work?",
  "What areas do you service?",
  "How much will my repair cost?",
];


/* =========================================================
   FAQ HERO
========================================================= */

export default function FAQHero() {
  return (
    <section className={styles.hero}>
      {/* OPTIMISED BACKGROUND IMAGE */}

      <Image
        src="/images/hero/omkar-autocare-hero-bg.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={60}
        sizes="100vw"
        className={styles.backgroundImage}
      />


      {/* DARK OVERLAY */}

      <div
        className={styles.overlay}
        aria-hidden="true"
      />


      {/* APPROVED WEBSITE CONTAINER */}

      <div className={styles.inner}>
        {/* LEFT CONTENT */}

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            CLEAR ANSWERS. NO GUESSWORK.
          </span>

          <h1>
            Answers that
            <br />
            keep you moving.
            <br />

            <span>
              Frequently Asked Questions.
            </span>
          </h1>

          <p>
            Straightforward answers about mobile servicing, repairs,
            pricing and what to expect when you book with OMKAR
            Autocare.
          </p>
        </div>


        {/* POPULAR QUESTIONS */}

        <aside
          className={styles.questionsPanel}
          aria-labelledby="faq-popular-questions"
        >
          <span className={styles.panelEyebrow}>
            BEFORE YOU BOOK
          </span>

          <h2 id="faq-popular-questions">
            Popular questions
          </h2>

          <div className={styles.questionsList}>
            {popularQuestions.map((question, index) => (
              <a
                key={question}
                href="#faq-answers"
                className={styles.questionLink}
              >
                <span className={styles.questionNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.questionText}>
                  {question}
                </span>

                <span
                  className={styles.questionArrow}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
