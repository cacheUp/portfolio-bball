import axios from "axios";
import Cookies from "js-cookie";

import { getCookieFromReq } from "../helpers/utils";
const axiosInstance = axios.create({
  baseUrl: "http://localhost:3000/api/v1",
  timeout: 3000
});

const setAuthHeader = req => {
  const token = req ? getCookieFromReq(req, "jwt") : Cookies.getJSON("jwt");

  if (token) {
    return { headers: { authorization: `Bearer ${token}` } };
  }

  return undefined;
};

export const getSecretData = async req => {
  const url = "/secret";

  return await axiosInstance
    .get(url, setAuthHeader(req))
    .then(response => response.data);
};

export const getPortfolios = async req => {
  return await axiosInstance
    .get("http://localhost:3000/api/v1/portfolios")
    .then(response => response.data);
};

const rejectPromise = err => {
  let error = {};
  if (err && err.response && err.response.data) {
    error = err.response.data;
  } else {
    error = err;
  }
  return Promise.reject(error);
};

export const createPortfolio = async portfolioData => {
  return await axios
    .post(
      "http://localhost:3000/api/v1/portfolios",
      portfolioData,
      setAuthHeader()
    )
    .then(response => response.data)
    .catch(error => {
      return rejectPromise(error);
    });
};

export const getPortfolioById = async id => {
  return await axiosInstance
    .get(`http://localhost:3000/api/v1/portfolios/${id}`)
    .then(response => response.data);
};
