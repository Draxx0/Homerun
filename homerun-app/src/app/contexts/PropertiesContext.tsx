import {
  createContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import PropertyServices from "../../api/services/properties.service";
import { IProperty, IPropertyCategories } from "../../api/utils/utils";

type PropertyType = {
  properties: IProperty | null;
  setProperties: Dispatch<SetStateAction<IProperty | null>>;
  categories: IPropertyCategories | null;
  setCategories: Dispatch<SetStateAction<IPropertyCategories | null>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
};

const PropertiesContext = createContext<PropertyType>({
  properties: null,
  setProperties: () => {},
  categories: null,
  setCategories: () => { },
  selectedCategory: "",
  setSelectedCategory: () => { },
  selectedType: "",
  setSelectedType: () => { },
});

type IProps = {
  children: ReactNode;
};

const PropertiesContextProvider: FC<IProps> = ({ children }) => {
  const [properties, setProperties] = useState<IProperty | null>(null);
  const [categories, setCategories] = useState<IPropertyCategories | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const getProperties = async () => {
    try {
      await PropertyServices.getAll().then((res) => {
        setProperties(res);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      await PropertyServices.getCategories().then((res) => {
        setCategories(res);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        setProperties,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        selectedType,
        setSelectedType,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export { PropertiesContextProvider, PropertiesContext };
