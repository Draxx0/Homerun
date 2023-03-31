import { useState } from "react";
import Search from '../../assets/icons/search.svg'
import Chevron from '../../assets/icons/chevron-down.png'
const Finder = () => {
  const [type, setType] = useState<string>("Acheter");
  return (
    <div className="finder">
      <div className="finder__top">
        <span
          className={
            type === "Acheter"
              ? "finder__top__type type-active"
              : "finder__top__type"
          }
          onClick={(e: React.MouseEvent<HTMLElement>) =>
            setType(e.currentTarget.innerText)
          }
        >
          Acheter
        </span>
        <span
          className={
            type === "Louer"
              ? "finder__top__type type-active"
              : "finder__top__type"
          }
          onClick={(e: React.MouseEvent<HTMLElement>) =>
            setType(e.currentTarget.innerText)
          }
        >
          Louer
        </span>
      </div>
      <div className="finder__bottom">
        <div className="finder__bottom__informations">
          <span className="finder__bottom__informations__title">Location</span>
          <div className="select-wrapper">
            <select name="location">
              <option value="California-US">Bordeaux</option>
              <option value="Nevada-US">Paris</option>
              <option value="Georgia-US">Lyon</option>
            </select>
            <img src={Chevron} alt="" />
          </div>
        </div>

        <div className="finder__bottom__informations">
          <span className="finder__bottom__informations__title">
            Type de propriétés
          </span>
          <div className="select-wrapper">
            <select name="category">
              <option value="apartment">Appartement</option>
              <option value="house">Maison</option>
              <option value="office">Bureaux</option>
              <option value="modern villa">Villa</option>
            </select>
            <img src={Chevron} alt="" />
          </div>
        </div>

        <div className="finder__bottom__informations">
          <span className="finder__bottom__informations__title">Prix</span>
          <div className="select-wrapper">
            {type === "Acheter" ? (
              <select name="price">
                <option value="50k-100k">50,000-100,000€</option>
                <option value="100k-150k">100,000-150,000€</option>
              </select>
            ) : (
              <select name="price">
                <option value="300-600">300-600€</option>
                <option value="600-1000">600-1,000€</option>
                <option value="1000-1500">1,000-1,500€</option>
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
