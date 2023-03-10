import { PropertiesContext } from "../../contexts/PropertiesContext";
import { useContext } from "react";
import { IPropertyCategory } from "../../../api/utils/utils";
import { useLocation } from "react-router-dom";

const Categories = () => {
  const location = useLocation();
  const { categories, selectedCategory, setSelectedCategory } = useContext(PropertiesContext) as any; // as any à changer demander sur discord
  return (
    <div className="categories">
      {categories?.map((category: IPropertyCategory, index: number) => {
        return (
          <div className={selectedCategory === category.category ? "category category-active" : "category"} key={index} onClick={() => setSelectedCategory(selectedCategory === category.category ? "" : category.category)}>
            <img src={category.image} alt="" />
            <span className="category__name">{category.category}</span>
            {location.pathname === "/" &&
              (category.properties.length > 0 ? (
                <span className="category__lenght">
                  {category.properties.length} properties
                </span>
              ) : (
                <span className="category__lenght">No properties yet</span>
              ))}

            {location.pathname === "/buy" &&
              (category.properties.length > 0 ? (
                <span className="category__lenght">
                  {category.properties.length} properties
                </span>
              ) : (
                <span className="category__lenght">No properties yet</span>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
