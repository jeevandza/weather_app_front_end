
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

export { API_ENDPOINT, API };
