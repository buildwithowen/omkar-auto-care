"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question:
      "If my car needs parts, do you charge for travel time to go and get them?",
    answer: (
      <p>
        No. We only charge for time we spend directly working on your vehicle.
      </p>
    ),
  },
  {
    question:
      "Will I know how much the car service or car repair will end up?",
    answer: (
      <>
        <p>
          Open and honest communication is extremely important to us at{" "}
          <strong>OMKAR Autocare</strong>. Before commencing any work, your
          mechanic will show you an itemised quote of the work required and all
          associated costs. So there are no nasty surprises – ever.
        </p>

        <p>
          In addition, we always go out of our way to assist our customers in
          managing their budget in relation to car expenses, and guide them in
          making long term service plans and decisions. Cars are an expensive
          asset, and we recognise how important it is to keep your costs down –
          without compromising on quality of course!
        </p>
      </>
    ),
  },
  {
    question: "When do I have to pay?",
    answer: (
      <p>
        We require payment on the day of the job. Paying us is easy at the
        completion of work – we welcome payments by cash, bank transfer, or
        Mastercard and Visa.
      </p>
    ),
  },
  {
    question: "What warranty do you offer?",
    answer: (
      <p>
        All our services and repairs are fully guaranteed. We look at our
        service as a long-term investment with our customers – we&apos;re in it
        for the long haul. And the quality of work and care we provide keeps
        our customers coming back again and again.
      </p>
    ),
  },
  {
    question: "What types of car repairs can OMKAR Autocare do?",
    answer: (
      <p>
        We are equipped and ready to perform all vehicle repairs on all major
        makes and models. Knowing your car is our profession and our passion!
      </p>
    ),
  },
  {
    question: "Are your technicians qualified?",
    answer: (
      <>
        <p>
          Our fully equipped mobile workshops employ fully qualified and highly
          trained technicians, carefully selected against{" "}
          <strong>OMKAR Autocare&apos;s</strong> stringent skill, quality of
          work, and customer service excellence benchmarks.
        </p>

        <p>
          We strongly believe in investing in the future of the mechanical
          industry in Australia, so our technicians do also train apprentices.
          However, your car is always worked on by a seasoned professional.
        </p>
      </>
    ),
  },
  {
    question: "Are your workers contractors or employees?",
    answer: (
      <p>
        Contractors and Employees all committed to providing outstanding
        quality of service and upholding the{" "}
        <strong>OMKAR Autocare</strong> philosophies Australia-wide.
      </p>
    ),
  },
  {
    question: "Do I need to become a member?",
    answer: (
      <>
        <p>
          No. Just like any workshop, we are a service and repair company. The
          only difference is that we come to you instead of you needing to come
          to us.
        </p>

        <p>
          The service we provide keeps our customers coming back – we
          don&apos;t need to lock you in with unnecessary membership fees!
        </p>
      </>
    ),
  },
  {
    question: "How soon can you come and fix my car?",
    answer: (
      <p>
        We can usually organise same or next business day bookings. You can
        email us or call <a href="tel:0430729392">0430 729 392</a> to arrange
        an arrival time. The earlier you call or email the better, so we have
        the best chance of being able to schedule your preferred time.
      </p>
    ),
  },
  {
    question: "What are your operating hours?",
    answer: (
      <p>
        Our first appointment starts at 08:00am. The helpful{" "}
        <strong>OMKAR Autocare</strong> team are available by phone from
        07:00am to 07:00pm on{" "}
        <a href="tel:0430729392">0430 729 392</a>.
      </p>
    ),
  },
  {
    question: "Do you work Saturdays?",
    answer: (
      <p>
        Yes. We come to you for car service or repair 6 days a week – Monday to
        Saturday. Due to the extra costs of Saturday overtime, there is a $29
        surcharge for any job booked in for a Saturday. We think that&apos;s
        pretty reasonable!
      </p>
    ),
  },
  {
    question: "Do you work Public Holidays?",
    answer: (
      <>
        <p>
          On national or local public holidays we are open with a limited crew.
          However we are closed on Christmas and Boxing Day, New Year&apos;s
          Day, Good Friday, Saturday and Easter Sunday and Anzac Day.
        </p>

        <p>
          Give us a call on <a href="tel:0430729392">0430 729 392</a> to
          confirm our hours of operation if you&apos;re ever unsure. Due to
          overtime costs, there is a $45 surcharge for any job booked in on a
          public holiday.
        </p>
      </>
    ),
  },
  {
    question: "How does your pricing work?",
    answer: (
      <>
        <p>
          It depends on the type of work you need. We always provide an
          itemised bill before commencing any work so you&apos;re always know
          what to expect in terms of costs.
        </p>

        <p>
          If you are unsure what is wrong with your car, and need a mechanic to
          just come out and fix it, we have a Repair Call Out of $150.00 which
          includes 30–45 minutes of labor. After this, we then charge a
          reasonable hourly rate in 15 minute increments.
        </p>
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftFaqs = faqs.slice(0, 7);
  const rightFaqs = faqs.slice(7);

  const renderFaq = (
    faq: (typeof faqs)[number],
    actualIndex: number
  ) => {
    const isOpen = openIndex === actualIndex;

    return (
      <div
        key={faq.question}
        className={`${styles.item} ${
          isOpen ? styles.itemOpen : ""
        }`}
      >
        <button
          type="button"
          className={styles.question}
          onClick={() =>
            setOpenIndex(isOpen ? null : actualIndex)
          }
          aria-expanded={isOpen}
        >
          <div className={styles.questionText}>
            <span className={styles.number}>
              {String(actualIndex + 1).padStart(2, "0")}.
            </span>

            <span>{faq.question}</span>
          </div>

          <span
            className={`${styles.chevron} ${
              isOpen ? styles.chevronOpen : ""
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <div
          className={`${styles.answerWrap} ${
            isOpen ? styles.answerWrapOpen : ""
          }`}
        >
          <div className={styles.answer}>
            {faq.answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            NEED TO KNOW
          </span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Quick answers to common questions about car servicing,
            repairs, bookings and pricing.
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            {leftFaqs.map((faq, index) =>
              renderFaq(faq, index)
            )}
          </div>

          <div className={styles.column}>
            {rightFaqs.map((faq, index) =>
              renderFaq(faq, index + 7)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}