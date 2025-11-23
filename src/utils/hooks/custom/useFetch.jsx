import { useState, useCallback } from "react";
import { useSnackbar } from "../index";

export function useFetch(apiFn) {
  const { showSnackbar } = useSnackbar();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (...args) => {
      try {
        setLoading(true);

        const response = await apiFn(...args);
        setData(response);
        return response;
      } catch (err) {
        showSnackbar(`Failed to fetch :${err}`, "error");
      } finally {
        setLoading(false);
      }
    },
    [apiFn]
  );

  return {
    data,
    loading,
    fetchData,
  };
}
