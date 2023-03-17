import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyServices from "../../../api/services/properties.service";
import { IProperty } from "../../../api/utils/utils";
import location from "../../assets/icons/location-xl.png";

const PropertyDetails = () => {
  const [property, setProperty] = useState<IProperty | null>(null);
  const { id } = useParams<{ id: string }>() as { id: string };

  const getProperty = async () => {
    try {
      await PropertyServices.getOne(id).then((response) => {
        setProperty(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, [id]);

  return (
    <>
      <section className="section-property-details">
        <div className="column">
          <h1>{property?.name}</h1>

          <p>{property?.description}</p>

          <p>{property?.price} €</p>

          <div className="row alignCenter">
            <img src={location} alt="location" className="location-icon" />
            <span>{property?.address}</span>
          </div>

          <a href="#section-last-properties" className="button">
            {property?.type === "rent" ? "Louer" : "Acheter"}
          </a>
        </div>

        <img src={property?.cover} alt={property?.name} />
      </section>

      {property?.type === "rent" && (
        <section className="section-reviews">
          <div className="row alignCenter">
            <div className="redbar"></div>
            <h3>Avis</h3>
          </div>
          <h2>Qu'en pense la communauté ?</h2>
        </section>
      )}
    </>
  );
};

export default PropertyDetails;
