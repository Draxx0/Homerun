import { IProperty } from "../../../../api/utils/property";
import { useContext, useEffect, useState, useRef } from "react";
import PropertyServices from "../../../../api/services/properties.service";
import { PropertiesContext } from "../../../contexts/PropertiesContext";
import PropertyCard from "../PropertyCard/PropertyCard";
import PropertiesPagination from "../PropertiesPagination/PropertiesPagination";

const LastProperties = () => {
  const { properties, selectedType } = useContext(PropertiesContext);
  const sectionRef = useRef(null);
  const [latestProperties, setLatestProperties] = useState<IProperty[] | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const propertiesToShow = latestProperties?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const latestPropertiesLength = latestProperties?.length ?? 0;

  useEffect(() => {
    if (properties) {
      PropertyServices.getLatest().then((res) => {
        !selectedType
          ? setLatestProperties(res)
          : setLatestProperties(
              res.filter(
                (property: IProperty) => property.type === selectedType
              )
            );
      });
    }
  }, [properties, selectedType]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="latest-properties" ref={sectionRef}>
        {propertiesToShow?.map((property: IProperty) => {
          return (
            <>
              <PropertyCard property={property} key={property._id} />
            </>
          );
        })}
      </div>
      <PropertiesPagination
        totalItems={latestPropertiesLength}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        reference={sectionRef}
      />
    </>
  );
};

export default LastProperties;
