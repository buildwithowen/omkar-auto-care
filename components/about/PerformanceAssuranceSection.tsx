import styles from "./PerformanceAssuranceSection.module.css";


/* =========================================================
   PERFORMANCE ASSURANCE POINTS
========================================================= */

const assurancePoints = [
  {
    title: "We assess and correct the work.",

    description:
      "If you are unhappy with the completed job, we will review the issue, assess what has happened and make any necessary corrections.",
  },

  {
    title: "Independent review if we disagree.",

    description:
      "If the issue cannot be resolved directly, an agreed independent expert can assess the work. If faults are identified, we will address them. If no faults are found, the agreed service price remains payable and the report cost is shared.",
  },

  {
    title: "Refunds when work is not completed.",

    description:
      "If you pay in advance and the agreed work is not carried out, your payment will be refunded. Where identified problems remain unresolved for two weeks, applicable advance payments will also be returned.",
  },
];


/* =========================================================
   PERFORMANCE ASSURANCE SECTION
========================================================= */

export default function PerformanceAssuranceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* SECTION INTRODUCTION */}

        <div className={styles.headingWrap}>
          <span className={styles.eyebrow}>
            <span
              className={styles.eyebrowLine}
              aria-hidden="true"
            />

            OMKAR’S PERFORMANCE ASSURANCE
          </span>

          <h2>
            If something is not right,
            <br />

            <span>
              we do not walk away.
            </span>
          </h2>

          <p className={styles.introduction}>
            You deserve to understand what happens if a repair or
            service does not meet expectations. Our performance
            assurance makes that process clear from the beginning.
          </p>
        </div>


        {/* NUMBERED ASSURANCE POINTS */}

        <div className={styles.assuranceList}>
          {assurancePoints.map((point, index) => (
            <article
              key={point.title}
              className={styles.assuranceItem}
            >
              <span className={styles.itemNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={styles.itemContent}>
                <h3>
                  {point.title}
                </h3>

                <p>
                  {point.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
