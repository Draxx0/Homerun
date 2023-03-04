import axios from "axios";
import { ISignin, ISignup } from "../utils/auth.utils";

const API_URL = process.env.REACT_APP_API_URL;

const signup = async (credentials: ISignup) => {
  const response = await axios.post(`${API_URL}/auth/signup`, credentials);
  return response.data;
};

const signin = async (credentials: ISignin) => {
  const response = await axios.post(`${API_URL}/auth/signin`, credentials);
  return response.data;
};

const AuthServices = {
  signup,
  signin,
};

export default AuthServices;
