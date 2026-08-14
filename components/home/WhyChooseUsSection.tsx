import styles from "./WhyChooseUsSection.module.css";

const benefits = [
  {
    number: "01",
    title: "Free Quotes Available",
    description:
      "Clear, straightforward pricing before work begins.",
  },
  {
    number: "02",
    title: "Completely Mobile Service",
    description:
      "We come to you, wherever your vehicle needs attention.",
  },
  {
    number: "03",
    title: "After-Hours & 24/7 Breakdown Call-Outs",
    description:
      "Reliable support when unexpected issues arise.",
  },
  {
    number: "04",
    title: "Skilled, Fully Trained & Insured",
    description:
      "Professional workmanship backed by experience and care.",
  },
  {
    number: "05",
    title: "Over 20 Years of Industry Experience",
    description:
      "Proven automotive knowledge built over decades.",
  },
  {
    number: "06",
    title: "Convenient On-Site Service",
    description:
      "Less disruption to your day, with servicing where you need it.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            WHY CHOOSE US
          </span>

          <h2>
            What Makes Us the Best Choice for Mobile Auto Repairs
          </h2>

          <p>
            At <strong>OMKAR Autocare</strong>, we value every car we service,
            regardless of make or model. We treat your vehicle with the same
            care and respect as our own, whether we come to you or service your
            vehicle from our Adelaide workshop.
          </p>
        </div>

        <div className={styles.features}>
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className={styles.feature}
            >
              <span className={styles.number}>
                {benefit.number}
              </span>

              <div className={styles.featureContent}>
                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}