import { useState } from "react";
import Search from '../../assets/icons/search.svg'
import Chevron from '../../assets/icons/chevron-down.png'
const Finder = () => {
  const [type, setType] = useState<string>("Buy");
  return (
    <div className="finder">
      <div className="finder__top">
        <span
          className={
            type === "Buy"
              ? "finder__top__type type-active"
              : "finder__top__type"
          }
          onClick={(e: React.MouseEvent<HTMLElement>) =>
            setType(e.currentTarget.innerText)
          }
        >
          Buy
        </span>
        <span
          className={
            type === "Rent"
              ? "finder__top__type type-active"
              : "finder__top__type"
          }
          onClick={(e: React.MouseEvent<HTMLElement>) =>
            setType(e.currentTarget.innerText)
          }
        >
          Rent
        </span>
      </div>
      <div className="finder__bottom">
        <div className="finder__bottom__informations">
          <span className="finder__bottom__informations__title">Location</span>
          <div className="select-wrapper">
            <select name="location">
              <option value="California-US">California, US</option>
              <option value="Nevada-US">Nevada, US</option>
              <option value="Georgia-US">Georgia, US</option>
            </select>
            <img src={Chevron} alt="" />
          </div>
        </div>

        <div className="finder__bottom__informations">
          <span className="finder__bottom__informations__title">
            Property type
          </span>
          <div className="select-wrapper">
            <select name="category">
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="office">Office</option>
              <option value="modern villa">Modern Villa</option>
            </select>
            <img src={Chevron} alt="" />
          </div>
        </div>

        <div className="finder__bottom__informations">
          <span className="finder__bottom__informations__title">Price</span>
          <div className="select-wrapper">
            {type === "Buy" ? (
              <select name="price">
                <option value="50k-100k">$50,000-100,000</option>
                <option value="100k-150k">$100,000-150,000</option>
              </select>
            ) : (
              <select name="price">
                <option value="300-600">$300-600</option>
                <option value="600-1000">$600-1,000</option>
                <option value="1000-1500">$1,000-1,500</option>
              </select>
            )}
            <img src={Chevron} alt="" />
          </div>
        </div>

        <div className="finder__bottom__informations">
          <span className="finder__bottom__informations__search">
            <img
              src={Search}
              alt="recherche icone"
              className="finder__bottom__informations__search__icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Finder;
