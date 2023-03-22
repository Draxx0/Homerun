import jwtDecode from "jwt-decode";
import { IToken } from "../utils/token.utils";

const setTokenInLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

const getTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
};

const isValidToken = (accessToken: string) => {
  const decodedToken: IToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp > currentTime;
};

const getUserFromLocalToken = () => {
  const accessToken = getTokenFromLocalStorage();
  if (!accessToken) return null;
  const isValid = isValidToken(accessToken);
  if (!isValid) return null;
  return jwtDecode(accessToken);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
};

const TokenService = {
  setTokenInLocalStorage,
  getUserFromLocalToken,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
};

export default TokenService;
