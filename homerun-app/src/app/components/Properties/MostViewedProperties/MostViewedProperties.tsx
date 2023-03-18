import { IProperty } from "../../../../api/utils/utils";
import { useContext, useEffect, useState } from "react";
import { PropertiesContext } from "../../../contexts/PropertiesContext";
import PropertyServices from "../../../../api/services/properties.service";
import PropertyCard from "../PropertyCard/PropertyCard";

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
                <PropertyCard property={property}/>
              );
            })
        : mostViewedProperties?.map((property: IProperty) => {
            return (
              <PropertyCard property={property} key={property._id} />
            );
          })}
    </div>
  );
};

export default MostViewedProperties;
