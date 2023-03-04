import Categories from "../../components/Categories/Categories";

const BuyView = () => {
  return (
    <>
      <section className="section-buy-header">
        <div className="column">
          <h1>A desire to <br/> buy ?</h1>

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

        <img src="./assets/images/header-bg.jpg" alt="" />
      </section>

      <section className="section-categories">
        <Categories />
      </section>
    </>
  );
};

export default BuyView;
