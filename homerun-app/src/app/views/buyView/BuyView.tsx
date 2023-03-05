import Categories from "../../components/Categories/Categories";
import LastProperties from "../../components/Properties/LastProperties/LastProperties";
import PropertyFilter from "../../components/Properties/PropertyFilter/PropertyFilter";

const BuyView = () => {
  return (
    <>
      <section className="section-buy-header">
        <div className="column">
          <h1>
            A desire to <br /> buy ?
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a href="#section-last-properties" className="button">
            Discover
          </a>
        </div>

        <img src="./assets/images/buy-bg" alt="buy header background" />
      </section>

      <section className="section-categories">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Categories</h3>
        </div>
        <h2>Explore categories</h2>

        <Categories />
      </section>

      <section className="section-last-properties">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Search</h3>
        </div>
        <div className="row spaceBtwn alignCenter">
          <h2>Last Properties</h2>

          <PropertyFilter />
        </div>

        <LastProperties />
      </section>
    </>
  );
};

export default BuyView;
