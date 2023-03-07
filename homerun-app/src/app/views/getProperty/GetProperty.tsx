import LastProperties from "../../components/Properties/LastProperties/LastProperties";
import PropertyFilter from "../../components/Properties/PropertyFilter/PropertyFilter";
import headerImg from "../../assets/images/buy-bg.jpg";

const GetProperty = () => {
  return (
    <>
      <section className="section-buy-header">
        <div className="column">
          <h1>
            A desire to <br /> buy or rent property ?
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

        <img src={headerImg} alt="buy header background" />
      </section>

      <section className="section-last-properties" id="section-last-properties">
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

export default GetProperty;
