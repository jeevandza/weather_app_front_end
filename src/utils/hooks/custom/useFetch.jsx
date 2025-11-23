import { useState, useCallback } from "react";
import { useSnackbar } from "../index";

/**
 * Custom query hook  
 */
export function useFetch(apiFn) {
  const { showSnackbar } = useSnackbar();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (...args) => {
      try {
        setLoading(true);

        const response = await apiFn(...args);

        if (response) {
          if (response.success === false) {
            showSnackbar(response.message || "Something went wrong", "info");
            setData(null);
          } else {
            setData(response);
          }
        } else {
          showSnackbar("No data found", "info");
          setData(null);
        }

        return response;
      } catch (err) {
        console.error(err);
        showSnackbar(`Failed to fetch: ${err.message || err}`, "error");
        setData(null);
      } finally {
        setLoading(false);
      }
    },
    [apiFn, showSnackbar]
  );

  return {
    data,
    loading,
    fetchData,
  };
}
