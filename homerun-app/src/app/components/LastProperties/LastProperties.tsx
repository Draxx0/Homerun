import { IProperty } from "../../../api/utils/utils";
import { useContext, useEffect, useState } from "react";
import PropertyServices from "../../../api/services/properties.service";
import { PropertiesContext } from "../../contexts/PropertiesContext";
import PropertyCard from "../PropertyCard/PropertyCard";

const LastProperties = () => {
  const { properties } = useContext(PropertiesContext);
  const [latestProperties, setLatestProperties] = useState<IProperty[] | null>(
    null
  );

  useEffect(() => {
    if (properties) {
      PropertyServices.getLatest().then((res) => {
        setLatestProperties(res.filter((property: IProperty) => property.type === "sale"));
      });
    }
  }, [properties]);

  return (
    <div className="latest-properties">
      {latestProperties?.map((property: IProperty) => {
        return <PropertyCard property={property} key={property._id} />;
      })}
    </div>
  );
};

export default LastProperties;
