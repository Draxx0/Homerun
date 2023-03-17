import { Link } from "react-router-dom";
import { IProperty } from "../../../../api/utils/utils";
import Location from "../../../assets/icons/location.png";
import Home from "../../../assets/icons/menu-home.png";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

const PropertyCard = ({ property }: { property: IProperty }) => {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <div
      className={
        user?.properties.includes(property._id)
          ? "property own-property"
          : "property"
      }
      key={property._id}
    >
      {user?.properties.includes(property._id) && (
        <div className="own-property-tag">Votre propriété</div>
      )}
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
          <Link to={`property-details/${property._id}`} className="button">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
