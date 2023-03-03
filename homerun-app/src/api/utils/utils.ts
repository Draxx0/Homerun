export interface IProperty {
  name: string;
  location: string;
  address: string;
  price: number;
  description: string;
  category: string;
  views: number;
  images: string[];
  cover: string;
  type: string;
  _id: string;
}

export interface IPropertyCategory {
  category: string;
  image: string;
  properties: string[];
}

export interface IPropertyCategories {
  categories: IPropertyCategory[];
}
