import { packages } from "../data/packages";
import PackageCard from "./PackageCard";
import "./Packages.css";

export default function Packages() {

  return (
    <section
      className="packages-section"
      id="packages"
    >

      <div className="container">

        <div className="section-heading">

          <h2>
            Top Bhutan Holiday Packages
          </h2>

          <p>
            Discover thoughtfully planned Bhutan journeys
            with handpicked destinations, comfortable stays,
            local experiences, and flexible options for every
            kind of traveller.
          </p>

        </div>


        <div className="packages-grid">

          {packages.map((item) => (

            <PackageCard
              key={item.id}
              packageData={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
}