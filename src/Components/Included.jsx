import { useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Car,
  Headphones,
  FileCheck,
  Compass,
  Languages,
  Utensils,
  Landmark,
  Camera,
} from "lucide-react";

import "./Included.css";

const tabs = [
  {
    title: "Handpicked 3★/4★/5★ Stays",
    icon: BedDouble,
    heading: "Handpicked 3★/4★/5★ Stays",
    description:
      "Stay in carefully selected hotels, resorts, and retreats chosen for comfort, location, quality, and a relaxing Bhutan experience.",
  },
  {
    title: "Exclusive Private Vehicle",
    icon: Car,
    heading: "Exclusive Private Vehicle",
    description:
      "Travel comfortably with a private vehicle throughout your Bhutan journey with convenient local transportation.",
  },
  {
    title: "24×7 Local Emergency Desk",
    icon: Headphones,
    heading: "24×7 Local Emergency Desk",
    description:
      "Get local assistance whenever you need it during your Bhutan holiday.",
  },
  {
    title: "SDF Included",
    icon: FileCheck,
    heading: "SDF Included",
    description:
      "Your Sustainable Development Fee arrangements are handled as part of the package.",
  },
  {
    title: "Curated Experiences",
    icon: Compass,
    heading: "Curated Experiences",
    description:
      "Enjoy thoughtfully selected experiences that help you discover Bhutan beyond the usual tourist route.",
  },
  {
    title: "English-Speaking Guide",
    icon: Languages,
    heading: "English-Speaking Guide",
    description:
      "Travel with knowledgeable local guides who can explain Bhutanese culture, history, and traditions.",
  },
];

const experiences = [
  {
    icon: Camera,
    title: "Free Tourist\nSIM Card",
    text: "Stay connected throughout your journey with a local SIM, making it easy to call, navigate, and share your Bhutan experiences.",
  },
  {
    icon: Utensils,
    title: "Farmhouse Organic\nLunch",
    text: "Enjoy a traditional Bhutanese meal in a local farmhouse and experience authentic flavours in a warm, welcoming setting.",
  },
  {
    icon: Landmark,
    title: "Monastery\nPrivate Prayers",
    text: "Experience a meaningful spiritual moment with privately arranged prayers at a Bhutanese monastery.",
  },
  {
    icon: Camera,
    title: "Local\nExperiences",
    text: "Meet local communities, discover Bhutanese traditions, and experience everyday life beyond the typical tourist route.",
  },
];

export default function Included() {
  const [active, setActive] = useState(0);

  const activeTab = tabs[active];

  return (
    <section className="included-section" id="included">

      <div className="container">

        <div className="section-heading">
          <h2>What Every ZiniGo Package Includes</h2>

          <p>
            From comfortable stays to local support and carefully
            planned experiences, every ZiniGo package covers the
            essentials for a smooth and memorable Bhutan journey.
          </p>
        </div>

        <div className="included-layout">

          {/* Tabs */}

          <div className="included-tabs">

            {tabs.map((tab, index) => (
              <button
                key={tab.title}
                className={
                  active === index
                    ? "included-tab active"
                    : "included-tab"
                }
                onClick={() => setActive(index)}
              >
                <span>{tab.title}</span>

                <ArrowRight size={14} />
              </button>
            ))}

          </div>

          {/* Content */}

          <div className="included-content">

            <activeTab.icon
              size={17}
              className="included-content-icon"
            />

            <h3>{activeTab.heading}</h3>

            <p>{activeTab.description}</p>

          </div>

        </div>

        {/* Experience Heading */}

        <div className="experience-heading">

          <h2>Why Travel With ZiniGo?</h2>

          <p>
            Make your Bhutan journey more memorable with thoughtfully
            curated local experiences from staying connected with a
            local SIM and enjoying a traditional farm lunch to
            experiencing private monastery prayers and discovering
            authentic Bhutanese life beyond the usual tourist trail.
          </p>

        </div>

        {/* Experience Cards */}

        <div className="experience-grid">

          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <div className="experience-card" key={item.title}>

                <div className="experience-icon">
                  <Icon size={15} />
                </div>

                <h3>
                  {item.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>

                <p>{item.text}</p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}