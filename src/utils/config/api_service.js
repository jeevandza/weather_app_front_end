import { API_ENDPOINT } from "../../constants";

/**
 * Connection to server url for each end points 
 */
const buildUrl = (url) => {
  return `${API_ENDPOINT.replace(/\/+$/, "")}/${url.replace(/^\/+/, "")}`;
};

/**
 * Get api
 */
const GET = async (url) => {
  const response = await fetch(buildUrl(url), {
    method: "GET",
  });
  return response.json();
};

/**
 * Post api
 */
const POST = async (url, body) => {
  const response = await fetch(buildUrl(url), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

/**
 * Put api
 */
const PUT = async (url, body) => {
  const response = await fetch(buildUrl(url), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

/**
 * Delete api
 */
const DELETE_API = async (url) => {
  const response = await fetch(buildUrl(url), {
    method: "DELETE",
  });
  return response.json();
};

/**
 * Exports
 */
export const api = {
  GET,
  POST,
  PUT,
  DELETE_API,
};
