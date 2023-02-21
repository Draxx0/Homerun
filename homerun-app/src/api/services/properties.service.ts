import instance from "./api.service";
import { IProperty } from "../utils/utils";

const endPoint = "/properties";

const getAll = async () => {
  const response = await instance.get(endPoint);
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

const PropertyServices = {
  getAll,
  create,
  deleteOne,
};

export default PropertyServices;
