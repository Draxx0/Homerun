import { useState } from "react";
import { useLocation } from "react-router-dom";
type Step = {
  label: string;
  start: number;
  end: number;
};

const PropertyFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  const location = useLocation();

  const handleSliderChange = (event: any) => {
    const value = parseInt(event.target.value);
    const steps: Array<Step> =
      location.pathname === "/buy"
        ? [
            { label: "50 000$ - 150 000$", start: 50000, end: 150000 },
            { label: "150 000$ - 300 000$", start: 150000, end: 300000 },
            { label: "300 000$ - 500 000$", start: 300000, end: 500000 },
            { label: "500 000$ - 750 000$", start: 500000, end: 750000 },
            { label: "750 000$ - 1 000 000$", start: 750000, end: 1000000 },
          ]
        : [
            { label: "500$ - 1 500$ / month", start: 500, end: 1500 },
            { label: "1 500$ - 3 000$ / month", start: 1500, end: 3000 },
            { label: "3 000$ - 5 000$ / month", start: 3000, end: 5000 },
            { label: "5 000$ - 7 500$ / month", start: 5000, end: 7500 },
            { label: "7 500$ - 10 000$ / month", start: 7500, end: 10000 },
          ];
    const selected = steps.find(
      (step) => value >= step.start && value < step.end
    );
    if (selected) setSelectedStep(selected);
    // Ajoutez ici la logique que vous souhaitez exécuter lorsque l'utilisateur sélectionne une étape
  };
  return (
    <div className="filter-wrapper">
      <span>Filter</span>
      <div
        className={showFilter ? " filter-active" : "filter"}
        onClick={() => setShowFilter(!showFilter)}
      >
        <div className="filter-bar-1"></div>
        <div className="filter-bar-2"></div>
        <div className="filter-bar-3"></div>
      </div>

      <div
        className={
          !showFilter
            ? "filter-container"
            : "filter-container filter-container-active"
        }
      >
        <div className="column">
          <span className="colored bold">Sort by</span>
          <div className="column">
            <div className="row">
              <input type="checkbox" name="most-viewed" id="most-viewed" />
              <label htmlFor="most-viewed">Most viewed</label>
            </div>
            <div className="row">
              <input type="checkbox" name="rating" id="rating" />
              <label htmlFor="rating">Rating</label>
            </div>
          </div>
        </div>
        <div className="column">
          <span className="colored bold">Category</span>
          <div className="column">
            <div className="row">
              <input type="checkbox" name="category" id="category" />
              <label htmlFor="category">House</label>
            </div>
            <div className="row">
              <input type="checkbox" name="category" id="category" />
              <label htmlFor="category">Apartment</label>
            </div>
            <div className="row">
              <input type="checkbox" name="category" id="category" />
              <label htmlFor="category">Modern Villa</label>
            </div>
            <div className="row">
              <input type="checkbox" name="category" id="category" />
              <label htmlFor="category">Office</label>
            </div>
          </div>
        </div>
        <div className="column">
          <span className="bold colored">Price Range</span>
          <input
            type="range"
            name="price-range"
            id="price-range"
            min={location.pathname === "/buy" ? 50000 : 500}
            max={location.pathname === "/buy" ? 1000000 : 10000}
            step="1"
            onChange={handleSliderChange}
          />
          {selectedStep && <div>{selectedStep.label}</div>}
        </div>

        <div className="row spaceBtwn buttons-filter">
          <button className="button">Reset</button>
          <button className="button">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
