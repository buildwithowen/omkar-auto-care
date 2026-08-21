import styles from "./ServiceChecklistSection.module.css";


/* =========================================================
   TYPES
========================================================= */

type ServiceSlug =
  | "accessories-audio"
  | "brake-systems"
  | "engine"
  | "minor-service"
  | "serpentine-timing-belt"
  | "suspension-shock-absorbers";

type ChecklistItem = {
  item: string;
  inspection: string;
  timeframe: string;
  safeCheck: string;
};

type ServiceChecklistContent = {
  eyebrow: string;
  heading: string;
  description: string;
  safetyNote: string;
  items: ChecklistItem[];
};

type ServiceChecklistSectionProps = {
  service: ServiceSlug;
};


/* =========================================================
   SERVICE CHECKLIST CONTENT
========================================================= */

const serviceChecklists: Record<
  ServiceSlug,
  ServiceChecklistContent
> = {
  "accessories-audio": {
    eyebrow: "ACCESSORIES & AUDIO CHECKLIST",

    heading: "Know what needs checking before electrical faults spread.",

    description:
      "A practical guide to common accessory and audio problems, recommended inspection timing and simple checks you can make safely.",

    safetyNote:
      "Only perform visual checks while your vehicle is parked and switched off. Stop using equipment that smells burnt, becomes hot or repeatedly blows a fuse.",

    items: [
      {
        item: "Wiring & connections",

        inspection:
          "Inspect wiring condition, grounding points and fuse protection.",

        timeframe:
          "After installation or during routine servicing.",

        safeCheck:
          "Look for visible loose cables, unusual heat or burning smells. Do not remove panels.",
      },
      {
        item: "Audio system",

        inspection:
          "Test the head unit, speakers, amplifier and sound quality.",

        timeframe:
          "Annually or whenever the sound changes.",

        safeCheck:
          "Try another audio source and note which speaker crackles, cuts out or sounds distorted.",
      },
      {
        item: "Electrical accessories",

        inspection:
          "Check dash cams, reversing cameras and other powered accessories.",

        timeframe:
          "Every 6–12 months or when faults appear.",

        safeCheck:
          "Restart the accessory and check whether its screen or indicator light responds.",
      },
      {
        item: "Battery drain",

        inspection:
          "Identify accessories drawing power while the vehicle is switched off.",

        timeframe:
          "Whenever the battery repeatedly goes flat.",

        safeCheck:
          "Unplug removable accessories overnight and note whether the battery problem continues.",
      },
      {
        item: "Mountings & cables",

        inspection:
          "Inspect accessible cables, fittings and accessory mounting points.",

        timeframe:
          "During routine servicing or after accessories become loose.",

        safeCheck:
          "While parked, check whether visible mounts move or cables appear pinched.",
      },
      {
        item: "Electrical diagnosis",

        inspection:
          "Trace interference, recurring faults and electrical warning signs.",

        timeframe:
          "As soon as unusual electrical behaviour starts.",

        safeCheck:
          "Record when the fault happens, which accessories were operating and any dashboard warnings.",
      },
    ],
  },

  "brake-systems": {
    eyebrow: "BRAKE SYSTEM CHECKLIST",

    heading: "Small brake warning signs can become dangerous quickly.",

    description:
      "Understand what should be inspected, when your braking system needs attention and which warning signs you can safely identify yourself.",

    safetyNote:
      "Never drive if the brake pedal feels unusually soft, braking distance increases suddenly or a brake warning light remains illuminated.",

    items: [
      {
        item: "Brake pads",

        inspection:
          "Measure remaining pad material and identify uneven wear.",

        timeframe:
          "Every 6–12 months or whenever braking noises appear.",

        safeCheck:
          "Listen for persistent squealing or grinding when slowing down.",
      },
      {
        item: "Brake rotors",

        inspection:
          "Check rotor thickness, surface condition and signs of warping.",

        timeframe:
          "Whenever brake pads are inspected or replaced.",

        safeCheck:
          "Notice whether the steering wheel or brake pedal vibrates during braking.",
      },
      {
        item: "Brake fluid",

        inspection:
          "Check fluid condition, contamination and the recommended replacement interval.",

        timeframe:
          "According to the vehicle manufacturer’s servicing schedule.",

        safeCheck:
          "With the vehicle parked, look for dashboard brake warnings or visible fluid beneath the car.",
      },
      {
        item: "Brake lines & hoses",

        inspection:
          "Inspect accessible lines and hoses for leaks, cracking or damage.",

        timeframe:
          "During routine servicing or whenever fluid loss is suspected.",

        safeCheck:
          "Check the ground where you normally park for fresh, unexplained fluid spots.",
      },
      {
        item: "Brake pedal response",

        inspection:
          "Assess pedal firmness, travel and overall braking response.",

        timeframe:
          "Immediately if the pedal feels soft, sinks or changes suddenly.",

        safeCheck:
          "While parked, notice whether the pedal feels unusually soft or travels further than normal.",
      },
      {
        item: "ABS & warning lights",

        inspection:
          "Diagnose ABS faults, sensor issues and brake warning indicators.",

        timeframe:
          "As soon as a warning light appears.",

        safeCheck:
          "Photograph the dashboard warning and note when it first appeared.",
      },
    ],
  },

  engine: {
    eyebrow: "ENGINE HEALTH CHECKLIST",

    heading: "Ignore engine warning signs and the repair bill can climb fast.",

    description:
      "See what should be checked, when inspection becomes urgent and which basic observations can help identify a developing engine problem.",

    safetyNote:
      "Never remove a hot radiator cap or continue driving if the engine overheats, the oil warning light appears or heavy smoke comes from the vehicle.",

    items: [
      {
        item: "Engine oil",

        inspection:
          "Check oil level, oil condition and signs of leaks or contamination.",

        timeframe:
          "During scheduled servicing or immediately when oil warnings appear.",

        safeCheck:
          "With the engine cool, look for fresh oil spots beneath the parked vehicle.",
      },
      {
        item: "Cooling system",

        inspection:
          "Inspect coolant condition, hoses and signs of overheating or leakage.",

        timeframe:
          "During servicing or whenever the temperature rises unexpectedly.",

        safeCheck:
          "Check the temperature gauge and look for visible coolant beneath the vehicle.",
      },
      {
        item: "Engine noises",

        inspection:
          "Investigate knocking, ticking, rattling and other unusual mechanical sounds.",

        timeframe:
          "As soon as a new or worsening noise develops.",

        safeCheck:
          "Record the sound and note whether it occurs at startup, while idling or when accelerating.",
      },
      {
        item: "Warning lights",

        inspection:
          "Read fault codes and identify the cause of engine warning indicators.",

        timeframe:
          "Immediately when an engine or oil warning light remains on.",

        safeCheck:
          "Photograph the dashboard symbol and note whether it stays on or flashes.",
      },
      {
        item: "Exhaust smoke",

        inspection:
          "Assess unusual smoke, burning smells and possible oil or coolant issues.",

        timeframe:
          "Whenever smoke changes colour or becomes more noticeable.",

        safeCheck:
          "From a safe distance, note the smoke colour and whether it appears at startup or continuously.",
      },
      {
        item: "Performance changes",

        inspection:
          "Diagnose rough idling, misfires, reduced power and difficult starting.",

        timeframe:
          "As soon as normal engine performance changes.",

        safeCheck:
          "Note when the issue occurs and whether it worsens while accelerating or idling.",
      },
    ],
  },

  "minor-service": {
    eyebrow: "MINOR SERVICE CHECKLIST",

    heading: "Routine servicing catches problems before they become expensive.",

    description:
      "Know what a minor service should cover, when common maintenance checks are due and what you can monitor between appointments.",

    safetyNote:
      "Only perform basic visual checks while your vehicle is parked safely. Refer to the manufacturer’s servicing schedule for the correct maintenance intervals.",

    items: [
      {
        item: "Engine oil & filter",

        inspection:
          "Replace engine oil and inspect or replace the oil filter as required.",

        timeframe:
          "According to the manufacturer’s service schedule.",

        safeCheck:
          "Look for oil warning lights, visible leaks or a noticeable change in engine sound.",
      },
      {
        item: "Fluid levels",

        inspection:
          "Inspect essential vehicle fluids and identify signs of contamination or leakage.",

        timeframe:
          "During each scheduled service or when warning lights appear.",

        safeCheck:
          "Check for unexplained fluid spots beneath the vehicle after it has been parked.",
      },
      {
        item: "Tyre condition",

        inspection:
          "Check tyre wear, visible damage and general tyre condition.",

        timeframe:
          "Monthly and during every routine service.",

        safeCheck:
          "Look for uneven tread wear, bulges, embedded objects or tyres that appear underinflated.",
      },
      {
        item: "Brake condition",

        inspection:
          "Inspect accessible braking components and identify early wear.",

        timeframe:
          "During routine servicing or whenever braking changes.",

        safeCheck:
          "Listen for squealing and note whether the vehicle pulls to one side when braking.",
      },
      {
        item: "Battery condition",

        inspection:
          "Assess battery performance, terminals and signs of starting trouble.",

        timeframe:
          "During scheduled servicing or when starting becomes difficult.",

        safeCheck:
          "Notice slow engine cranking, dim lights or repeated jump-start requirements.",
      },
      {
        item: "Lights & visibility",

        inspection:
          "Check exterior lights, wipers and general visibility-related items.",

        timeframe:
          "Every few months and before longer trips.",

        safeCheck:
          "Test headlights, indicators and brake lights while the vehicle is parked.",
      },
    ],
  },

  "serpentine-timing-belt": {
    eyebrow: "BELT INSPECTION CHECKLIST",

    heading: "One failing belt can stop the vehicle—or damage the engine.",

    description:
      "Learn which belt-related warning signs matter, when inspection is recommended and which symptoms you can safely observe before booking.",

    safetyNote:
      "Never touch belts, pulleys or moving engine components. If a belt fails or the vehicle overheats, stop driving and arrange professional inspection.",

    items: [
      {
        item: "Serpentine belt",

        inspection:
          "Inspect belt condition, visible cracking, fraying and general wear.",

        timeframe:
          "During routine servicing or when squealing begins.",

        safeCheck:
          "Listen for squealing after startup or when operating the air conditioning.",
      },
      {
        item: "Timing belt interval",

        inspection:
          "Check the vehicle’s recommended timing belt replacement schedule.",

        timeframe:
          "At the manufacturer’s specified age or kilometre interval.",

        safeCheck:
          "Review your service history and check whether a timing belt replacement is recorded.",
      },
      {
        item: "Tensioners & pulleys",

        inspection:
          "Check tensioner operation, pulley condition and abnormal movement.",

        timeframe:
          "Whenever a belt is inspected or replaced.",

        safeCheck:
          "Note rattling, chirping or repetitive noises coming from the engine bay.",
      },
      {
        item: "Charging system",

        inspection:
          "Check whether belt problems are affecting alternator operation.",

        timeframe:
          "Immediately if a battery warning light appears.",

        safeCheck:
          "Photograph any battery warning light and note whether lights become unusually dim.",
      },
      {
        item: "Cooling system impact",

        inspection:
          "Assess whether a belt-related fault is affecting engine cooling.",

        timeframe:
          "Immediately when the temperature gauge rises unexpectedly.",

        safeCheck:
          "Monitor the temperature gauge and stop driving if the engine begins overheating.",
      },
      {
        item: "Belt-related noises",

        inspection:
          "Identify squealing, slapping or grinding associated with belt movement.",

        timeframe:
          "As soon as a new or worsening noise appears.",

        safeCheck:
          "Record when the sound occurs without opening panels or touching moving components.",
      },
    ],
  },

  "suspension-shock-absorbers": {
    eyebrow: "SUSPENSION SAFETY CHECKLIST",

    heading: "Worn suspension can affect braking, steering and vehicle control.",

    description:
      "Understand which suspension components need inspection, when warning signs become serious and what you can safely observe before booking.",

    safetyNote:
      "Never work beneath a vehicle supported only by a jack. Avoid driving if steering feels unstable, the vehicle pulls suddenly or suspension damage is visible.",

    items: [
      {
        item: "Shock absorbers",

        inspection:
          "Inspect shock absorber condition, visible leakage and damping performance.",

        timeframe:
          "During routine servicing or when excessive bouncing begins.",

        safeCheck:
          "Notice whether the vehicle continues bouncing after crossing bumps.",
      },
      {
        item: "Suspension springs",

        inspection:
          "Check spring condition, vehicle ride height and signs of damage.",

        timeframe:
          "Whenever the vehicle sits unevenly or makes unusual noises.",

        safeCheck:
          "On level ground, look for one corner of the vehicle sitting noticeably lower.",
      },
      {
        item: "Steering stability",

        inspection:
          "Assess steering response and suspension-related handling concerns.",

        timeframe:
          "Immediately if steering feels loose or unstable.",

        safeCheck:
          "Note whether the vehicle wanders, pulls or feels unstable during normal driving.",
      },
      {
        item: "Tyre wear patterns",

        inspection:
          "Inspect uneven tyre wear that may indicate suspension problems.",

        timeframe:
          "Monthly and during scheduled servicing.",

        safeCheck:
          "Look for patchy, uneven or accelerated tyre wear across the tread.",
      },
      {
        item: "Suspension noises",

        inspection:
          "Investigate knocking, clunking and rattling over uneven roads.",

        timeframe:
          "As soon as new or worsening noises appear.",

        safeCheck:
          "Note whether the sound occurs over bumps, while turning or when braking.",
      },
      {
        item: "Braking behaviour",

        inspection:
          "Assess whether worn suspension is affecting braking stability.",

        timeframe:
          "Immediately if the vehicle dives excessively or feels unstable when stopping.",

        safeCheck:
          "Notice unusual front-end dipping or instability during normal braking.",
      },
    ],
  },
};


/* =========================================================
   REUSABLE SERVICE CHECKLIST SECTION
========================================================= */

export default function ServiceChecklistSection({
  service,
}: ServiceChecklistSectionProps) {
  const content = serviceChecklists[service];

  return (
    <section
      className={styles.section}
      aria-labelledby={"service-checklist-" + service}
    >
      <div className={styles.inner}>
        {/* SECTION INTRODUCTION */}

        <div className={styles.headingWrap}>
          <span className={styles.eyebrow}>
            <span
              className={styles.eyebrowLine}
              aria-hidden="true"
            />

            {content.eyebrow}
          </span>

          <h2 id={"service-checklist-" + service}>
            {content.heading}
          </h2>

          <p className={styles.description}>
            {content.description}
          </p>
        </div>


        {/* DESKTOP / TABLET CHECKLIST */}

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  Service item
                </th>

                <th scope="col">
                  What we inspect
                </th>

                <th scope="col">
                  When to check
                </th>

                <th scope="col">
                  Safe check before booking
                </th>
              </tr>
            </thead>

            <tbody>
              {content.items.map((item, index) => (
                <tr key={item.item}>
                  <td
                    className={styles.itemCell}
                    data-label="Service item"
                  >
                    <span className={styles.itemNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.itemName}>
                      {item.item}
                    </span>
                  </td>

                  <td data-label="What we inspect">
                    {item.inspection}
                  </td>

                  <td
                    className={styles.timeframeCell}
                    data-label="When to check"
                  >
                    {item.timeframe}
                  </td>

                  <td data-label="Safe check before booking">
                    {item.safeCheck}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* CUSTOMER SAFETY NOTE */}

        <div className={styles.safetyNote}>
          <span className={styles.safetyLabel}>
            Safety first
          </span>

          <p>
            {content.safetyNote}
          </p>
        </div>
      </div>
    </section>
  );
}
