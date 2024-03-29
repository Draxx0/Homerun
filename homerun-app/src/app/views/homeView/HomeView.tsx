import Categories from "../../components/Categories/Categories";
import Finder from "../../components/Finder/Finder";
import { PropertiesContext } from "../../contexts/PropertiesContext";
import { useContext, useEffect } from "react";
import MostViewedProperties from "../../components/Properties/MostViewedProperties/MostViewedProperties";
import { Link } from "react-router-dom";
import headerImage from "../../assets/images/header-bg.jpg";
import ViewMore from "../../assets/icons/viewmore.png";

const HomeView = () => {
  const { properties, categories, selectedCategory } = useContext(PropertiesContext);

  useEffect(() => {
    if (properties) console.log("properties", properties);
  }, [properties]);

  useEffect(() => {
    if (categories) console.log("categories", categories);
  }, [categories]);

  return (
    <>
      <section className="section-finder">
        <div className="finder-container">
          <h1>
            Trouver la propriété qui vous convient !
          </h1>
          <Finder />
          <img src={headerImage} alt="Propriété" className="header-img" />
        </div>
      </section>

      <section className="section-categories">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Catégories</h3>
        </div>
        <h2>Que recherchez-vous ?</h2>

        <Categories />
      </section>

      <section className="section-most-viewed">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Populaire</h3>
        </div>

        <div className="row spaceBtwn">
          <h2>Les <span className='colored'>{selectedCategory ? selectedCategory : "propriétés"}</span> les plus consultés</h2>
          <Link to="/properties" className="row alignCenter">
            Voir plus <img src={ViewMore} alt="viewmore" />
          </Link>
        </div>

        <MostViewedProperties />
      </section>
    </>
  );
};

export default HomeView;
