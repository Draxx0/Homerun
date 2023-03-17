import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyServices from "../../../api/services/properties.service";
import { IProperty } from "../../../api/utils/utils";
import location from "../../assets/icons/location-xl.png";
import star from "../../assets/icons/star.svg";
import PropertyComments from "../../components/Properties/PropertyComments/PropertyComments";
const PropertyDetails = () => {
  const [property, setProperty] = useState<IProperty | null>(null);
  const { id } = useParams<{ id: string }>() as { id: string };

  const getProperty = async () => {
    try {
      await PropertyServices.getOne(id).then((response) => {
        setProperty(response);
      });
      // await PropertyServices.addView(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
    console.log(id);
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
            {property?.type === "rent" ? "Louer" : "Faire une offre"}
          </a>
        </div>

        <div className="img-wrapper">
          <div className="tags">
            <div className={property?.type === "rent" ? " rent" : "sale"}>
              For {property?.type}
            </div>
            <div className={property?.type === "rent" ? " rent" : " sale"}>
              {property?.category}
            </div>
            <div
              className={
                property?.type === "rent"
                  ? " rent row alignCenter gap-1"
                  : " sale row alignCenter gap-1"
              }
            >
              <span style={{ color: "inherit" }}>{property?.stars}</span>
              <img src={star} alt="note" className="star" />
            </div>
          </div>
          <img src={property?.cover} alt={property?.name} />
        </div>
      </section>

      {property?.type === "rent" && (
        <section className="section-reviews">
          <div className="row alignCenter">
            <div className="redbar"></div>
            <h3>Avis</h3>
          </div>
          <h2>Qu'en pense la communauté ?</h2>

          <PropertyComments property={property}/>
        </section>
      )}
    </>
  );
};

export default PropertyDetails;
