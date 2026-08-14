import styles from "./LogBookIncludesSection.module.css";

const items = [
  {
    number: "01",
    title: "Comprehensive Inspection",
    description:
      "We perform a thorough inspection of your vehicle’s key systems and components.",
    details: [
      {
        label: "Engine",
        text: "Checking oil levels, filters, and overall engine condition.",
      },
      {
        label: "Brakes",
        text: "Inspecting pads, discs, and fluid levels for safety.",
      },
      {
        label: "Transmission",
        text: "Assessing fluid levels and system functionality.",
      },
    ],
  },
  {
    number: "02",
    title: "Scheduled Maintenance",
    description:
      "Our log book service covers scheduled maintenance tasks specified by your vehicle’s manufacturer.",
    details: [
      {
        label: "Oil and Filter Change",
        text: "Change engine oil and filters for smooth operation.",
      },
      {
        label: "Fluid Checks and Top-Ups",
        text: "Top up brake, transmission, and coolant fluids.",
      },
      {
        label: "Tire Rotation and Balancing",
        text: "Ensuring even tire wear and proper handling.",
      },
    ],
  },
  {
    number: "03",
    title: "Parts Replacement",
    description:
      "We handle the replacement of worn-out or faulty parts with high-quality components.",
    details: [
      {
        label: "Filters",
        text: "Air, cabin, and fuel filters.",
      },
      {
        label: "Belts and Hoses",
        text: "Timing belts, serpentine belts, and various hoses.",
      },
      {
        label: "Spark Plugs",
        text: "Replacing spark plugs to maintain engine efficiency.",
      },
    ],
  },
  {
    number: "04",
    title: "Manufacturer-Specified Procedures",
    description:
      "Following your vehicle’s log book, we perform any manufacturer-specified procedures.",
    details: [
      {
        label: "Timing Belt Replacement",
        text: "As per manufacturer intervals.",
      },
      {
        label: "Brake Fluid Replacement",
        text: "Ensuring effective braking performance.",
      },
      {
        label: "Battery Checks",
        text: "Testing and replacing if necessary.",
      },
    ],
  },
];

export default function LogBookIncludesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>WHAT&apos;S INCLUDED</span>

          <h2>Our Log Book Service Includes</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.number} className={styles.item}>
              <span className={styles.number}>{item.number}</span>

              <div className={styles.content}>
                <h3>{item.title}</h3>

                <p className={styles.description}>{item.description}</p>

                <div className={styles.details}>
                  {item.details.map((detail) => (
                    <div key={detail.label} className={styles.detail}>
                      <h4>{detail.label}</h4>

                      <p>{detail.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}