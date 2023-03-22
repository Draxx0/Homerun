import { RefObject } from "react";
import { IUserComment } from "./user.utils";

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
  stars: number;
  propertySize: string;
  availableAt: string;
  propertyStuff: IPropertyStuff[];
  comments: IComment[];
  _id: string;
}

export interface IPropertyStuff {
  totalRooms: number;
  totalBathrooms: number;
  totalBedrooms: number;
  isGarage: boolean;
  isToilet: boolean;
  isKitchen: boolean;
}

export interface IComment {
  _id: string;
  content: string;
  stars: number;
  user: IUserComment;
  property: string;
}

export interface ICommentCredentials {
  content: string;
  stars: number;
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
