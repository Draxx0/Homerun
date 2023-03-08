import { IProperty } from "../../../../api/utils/utils";
import { useContext, useEffect, useState } from "react";
import { PropertiesContext } from "../../../contexts/PropertiesContext";
import PropertyServices from "../../../../api/services/properties.service";
import { Link } from "react-router-dom";
import Location from "../../../assets/icons/location.png";
import Home from "../../../assets/icons/menu-home.png";

const MostViewedProperties = () => {
  const { properties, selectedCategory } = useContext(PropertiesContext);
  const [mostViewedProperties, setMostViewedProperties] = useState<
    IProperty[] | null
  >(null);

  useEffect(() => {
    if (properties) {
      PropertyServices.getMostViewed().then((res) => {
        setMostViewedProperties(res);
      });
    }
  }, [properties]);

  return (
    <div className="most-viewed-properties">
      {selectedCategory
        ? mostViewedProperties
            ?.filter((property) => property.category === selectedCategory)
            .map((property: IProperty) => {
              return (
                <div className="property" key={property._id}>
                  <div className="top-property">
                    <img src={property.cover} alt="property cover" />
                    {property.type === "rent" ? (
                      <div className="type-tag rent">For rent</div>
                    ) : (
                      <div className="type-tag sale">For sale</div>
                    )}
                  </div>
                  <div className="bottom-property">
                    <p className="property-name">{property.name}</p>
                    <div className="row alignCenter">
                      <div className="row alignCenter">
                        <img src={Location} alt="location" />
                        <p>{property.location}</p>
                      </div>

                      <div className="row alignCenter">
                        <img src={Home} alt="location" />
                        <p>{property.category}</p>
                      </div>
                    </div>
                    <div className="row spaceBtwn alignCenter">
                      {property.type === "rent" ? (
                        <p className="property-price">
                          ${property.price} <span className="xs">/month</span>
                        </p>
                      ) : (
                        <p className="property-price">${property.price}</p>
                      )}
                      <Link to="" className="button">
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
        : mostViewedProperties?.map((property: IProperty) => {
            return (
              <div className="property" key={property._id}>
                <div className="top-property">
                  <img src={property.cover} alt="property cover" />
                  {property.type === "rent" ? (
                    <div className="type-tag rent">For rent</div>
                  ) : (
                    <div className="type-tag sale">For sale</div>
                  )}
                </div>
                <div className="bottom-property">
                  <p className="property-name">{property.name}</p>
                  <div className="row alignCenter">
                    <div className="row alignCenter">
                      <img src={Location} alt="location" />
                      <p>{property.location}</p>
                    </div>

                    <div className="row alignCenter">
                      <img src={Home} alt="location" />
                      <p>{property.category}</p>
                    </div>
                  </div>
                  <div className="row spaceBtwn alignCenter">
                    {property.type === "rent" ? (
                      <p className="property-price">
                        ${property.price} <span className="xs">/month</span>
                      </p>
                    ) : (
                      <p className="property-price">${property.price}</p>
                    )}
                    <Link to="" className="button">
                      See more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default MostViewedProperties;
