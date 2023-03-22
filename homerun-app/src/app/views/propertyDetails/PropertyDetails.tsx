import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropertyServices from "../../../api/services/properties.service";
import { IProperty } from "../../../api/utils/utils";
import location from "../../assets/icons/location-xl.png";
import star from "../../assets/icons/star.svg";
import PropertyComments from "../../components/Properties/PropertyComments/PropertyComments";
import convertStringToData from "../../functions/convertStringToData";
const PropertyDetails = () => {
  const [property, setProperty] = useState<IProperty | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
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
  }, [id]);

  useEffect(() => {
    if (property) {
      const currentDate = new Date();
      const availableDate = convertStringToData(property.availableAt);
      if (availableDate < currentDate) {
        setIsAvailable(true);
      }
    }
  }, [property]);

  return (
    <>
      <section className="section-property-details">
        <div className="column">
          <h1>{property?.name}</h1>

          <p>{property?.description}</p>

          <p>
            {property?.type === "rent" ? "Prix du loyer" : "Prix du bien"}{" "}
            {property?.price} €{" "}
            {property?.type === "rent" && <small>/ mois</small>}
          </p>

          <div className="row alignCenter">
            <img src={location} alt="location" className="location-icon" />
            <span>{property?.address}</span>
          </div>

          <button
            title={
              (!isAvailable as any) && "Ce bien n'est pas encore disponible"
            }
            className="button"
            disabled={!isAvailable}
          >
            Contacter
          </button>
        </div>

        <div className="img-wrapper">
          <div className="tags">
            <div className={property?.type === "rent" ? " rent" : "sale"}>
              {property?.type === "rent" ? "Location" : "Vente"}
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

      <section className="section-property-stuff">
        <div className="row alignCenter">
          <div className="redbar"></div>
          <h3>Détails</h3>
        </div>

        <h2 className="row alignCenter">Informations complémentaires</h2>
      </section>

      {property?.type === "rent" && (
        <section className="section-reviews">
          <div className="row alignCenter">
            <div className="redbar"></div>
            <h3>Avis</h3>
          </div>
          <h2 className="row alignCenter">
            Qu'en pense la communauté ?{" "}
            <small className="colored xs">
              {" "}
              - {property.comments.length} commentaires
            </small>
          </h2>

          <PropertyComments property={property} />
        </section>
      )}
    </>
  );
};

export default PropertyDetails;
