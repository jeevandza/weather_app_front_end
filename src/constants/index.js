
/**
 * Server end point 
 */
const API_ENDPOINT = process.env.REACT_APP_SERVER_URL || "";


/**
 * Service route end points
 */
const API = {
  weather: {
    common: "/weather",
  },
};



/**
 * 
 */
const AVAILABLE_CITIES = [
  { name: "New York" },
  { name: "London" },
  { name: "Paris" },
  { name: "Tokyo" },
  { name: "Dubai" },
  { name: "Sydney" },
  { name: "Toronto" },
  { name: "Berlin" },
  { name: "Madrid" },
  { name: "Singapore" },
  { name: "Hong Kong" },
  { name: "Bangkok" },
  { name: "Istanbul" },
  { name: "Moscow" },
  { name: "Mumbai" },
  { name: "Delhi" },
  { name: "Shanghai" },
  { name: "Los Angeles" },
  { name: "Chicago" },
  { name: "San Francisco" },
];

export { API_ENDPOINT, API, AVAILABLE_CITIES };
