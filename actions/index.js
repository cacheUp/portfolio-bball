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

export const updatePortfolio = async portfolioData => {
  return await axios
    .patch(
      `http://localhost:3000/api/v1/portfolios/${portfolioData._id}`,
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

export const deletePortfolio = portfolioId => {
  return axios
    .delete(
      `http://localhost:3000/api/v1/portfolios/${portfolioId}`,
      setAuthHeader()
    )
    .then(response => response.data);
};

//  ----------------------- Blog Actions -----------------------

export const createBlog = (blogData, lockId) => {
  return axios
    .post(
      `http://localhost:3000/api/v1/blogs?lockId=${lockId}`,
      blogData,
      setAuthHeader()
    )
    .then(response => response.data)
    .catch(err => rejectPromise(err));
};

export const getBlogById = blogId => {
  return axios
    .get(`http://localhost:3000/api/v1/blogs/${blogId}`)
    .then(response => response.data);
};

export const updateBlog = async (blogData, id) => {
  return await axios
    .patch(
      `http://localhost:3000/api/v1/blogs/${id}`,
      blogData,
      setAuthHeader()
    )
    .then(response => response.data)
    .catch(error => {
      return rejectPromise(error);
    });
};

export const getUserBlogs = async req => {
  return await axios
    .get("http://localhost:3000/api/v1/blogs/me", setAuthHeader(req))
    .then(response => response.data)
    .catch(error => {
      return rejectPromise(error);
    });
};

export const deleteBlog = blogId => {
  return axios.delete(
    `http://localhost:3000/api/v1/blogs/${blogId}`,
    setAuthHeader()
      .then(response => {
        response.data;
      })
      .catch(error => {
        return rejectPromise(error);
      })
  );
};
