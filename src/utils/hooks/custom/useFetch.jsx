import { useState, useCallback } from "react";
import { useSnackbar } from "../index";

export function useFetch(apiFn) {
  const { showSnackbar } = useSnackbar();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  const fetchData = useCallback(
    async (...args) => {
      try {
        setLoading(true);

        const response = await apiFn(...args);
        setData(response);
        return response;
      } catch (err) {
        showSnackbar(`Failed to fetch: ${err.message || err}`, "error");
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