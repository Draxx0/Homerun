import axios from "axios";
import instance from "./api.service";
import { IProperty } from "../utils/utils";

const endPoint = "/properties";

const getAll = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}${endPoint}`);
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/properties/categories`);
  return response.data;
};

const create = async (credentials: IProperty) => {
  const response = await instance.post(endPoint, credentials);
  return response.data;
};

const deleteOne = async (id: string) => {
  const response = await instance.delete(`${endPoint}/${id}`);
  return response.data;
};

const getMostViewed = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/properties/most-viewed`);
  return response.data;
};

const getLatest = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/properties/latest`);
  return response.data;
};

const PropertyServices = {
  getAll,
  getCategories,
  create,
  deleteOne,
  getMostViewed,
  getLatest,
};

export default PropertyServices;
