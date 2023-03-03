import Categories from "../../components/Categories/Categories";
import Finder from "../../components/Finder/Finder";
import { PropertiesContext } from "../../contexts/PropertiesContext";
import { useContext, useEffect } from "react";
import MostViewedProperties from "../../components/MostViewedProperties/MostViewedProperties";
import { Link } from "react-router-dom";

const HomeView = () => {
  const { properties, categories } = useContext(PropertiesContext);

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
            Find a place
            <br /> you'll love
          </h1>
          <Finder />
          <img
            src="./assets/images/header-bg.jpg"
            alt="Propriété"
            className="header-img"
          />
        </div>
      </section>

      <section className="section-categories">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Categories</h3>
        </div>
        <h2>Explore categories</h2>

        <Categories />
      </section>

      <section className="section-most-viewed">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Popular</h3>
        </div>

        <div className="row spaceBtwn">
          <h2>Most viewed property</h2>
          <Link to="" className="row alignCenter">
            View More <img src="./assets/icons/viewmore.png" alt="viewmore" />
          </Link>
        </div>

        <MostViewedProperties />
      </section>
    </>
  );
};

export default HomeView;
