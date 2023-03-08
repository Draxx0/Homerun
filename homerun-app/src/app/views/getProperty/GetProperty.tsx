import LastProperties from "../../components/Properties/LastProperties/LastProperties";
import PropertyFilter from "../../components/Properties/PropertyFilter/PropertyFilter";
import headerImg from "../../assets/images/buy-bg.jpg";
import Categories from "../../components/Categories/Categories";
import SearchType from "../../components/SearchType/SearchType";

const GetProperty = () => {
  return (
    <>
      <section className="section-buy-header">
        <div className="column">
          <h1>Un désir d'acheter ou de louer ?</h1>

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
            Découvrir
          </a>
        </div>

        <img src={headerImg} alt="buy header background" />
      </section>

      <section className="section-categories">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Type de recherche</h3>
        </div>
        <h2>Souhaiter vous louer ou acheter ?</h2>

        <SearchType />
      </section>

      <section className="section-last-properties" id="section-last-properties">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Rechercher</h3>
        </div>
        <div className="row spaceBtwn alignCenter">
          <h2>Dernières propriétés</h2>

          <PropertyFilter />
        </div>

        <LastProperties />
      </section>
    </>
  );
};

export default GetProperty;
