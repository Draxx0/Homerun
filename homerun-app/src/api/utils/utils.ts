import { RefObject } from "react";

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

export interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  reference: RefObject<HTMLDivElement>;
}
