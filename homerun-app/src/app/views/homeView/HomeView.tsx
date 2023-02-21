import Finder from "../../components/Finder/Finder";

const HomeView = () => {
  return (
    <>
      <section className="section-finder">
        <div className="finder-container">

        <h1>
          Find a place
          <br /> you'll love
        </h1>
        <Finder />
        <img src="./assets/images/header-bg.jpg" alt="Propriété" className="header-img" />
        </div>
      </section>
    </>
  );
};

export default HomeView;
