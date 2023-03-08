import { PropertiesContext } from "../../contexts/PropertiesContext";
import { useContext } from "react";
import { IProperty } from "../../../api/utils/utils";

interface ISearchType {
  type: string;
  image: string;
  label: string;
}

const SearchType = () => {
  const { properties, setSelectedType, selectedType } = useContext(PropertiesContext) as any;
  const searchType = [
    {
      type: "rent",
      label: "Louer",
      image:
        "https://www.homestratosphere.com/wp-content/uploads/2020/07/pretty-houses-july092020.jpg",
    },
    {
      type: "sale",
      label: "Acheter",
      image:
        "https://lovehomedesigns.com/wp-content/uploads/2022/05/farmhouse-051922.jpg",
    },
  ];
  return (
    <div className="search-types">
      {searchType.map((searchType: ISearchType, index: number) => {
        return (
          <div className={selectedType === searchType.type ? "search-type search-type-active" : "search-type"} key={index} onClick={() => setSelectedType(selectedType === searchType.type ? "" : searchType.type)}>
            <img src={searchType.image} alt="" />
            <span className="search-type__name">{searchType.label}</span>
            <span className="search-type__lenght">
              {
                properties?.filter(
                  (property: IProperty) => property.type === searchType.type
                ).length
              }{" "}
              properties
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchType;
