import { PropertiesContext } from "../../contexts/PropertiesContext";
import { useContext } from "react";
import { IPropertyCategory } from "../../../api/utils/utils";

const Categories = () => {
  const { categories } = useContext(PropertiesContext) as any; // as any à changer demander sur discord
  return (
    <div className="categories">
      {categories?.map((category: IPropertyCategory, index: number) => {
        return (
          <div className="category" key={index}>
            <img src={category.image} alt="" />
            <span className="category__name">{category.category}</span>
            {category.properties.length > 0 ? (
              <span className="category__lenght">{category.properties.length} properties</span>
            ) : (
              <span className="category__lenght">No properties yet</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
