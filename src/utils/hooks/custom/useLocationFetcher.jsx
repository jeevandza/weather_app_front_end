import { useEffect, useState } from "react";
import { useSnackbar } from "../index";

export function useLocationFetcher() {
  const { showSnackbar } = useSnackbar();

  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function getIpFallback() {
      try {
        const res = await fetch("https://geolocation-db.com/json/");
        if (!res.ok)
          showSnackbar(
            "Failed to trace your location, please allow your location",
            "error"
          );

        const data = await res.json();

        if (isMounted) {
          setLocation({
            lat: data.latitude,
            lon: data.longitude,
          });
          setLoading(false);
        }
      } catch (e) {
        if (isMounted) {
          showSnackbar("Could not determine location", "error");
          setLoading(false);
        }
      }
    }

    function handleGeolocationSuccess(pos) {
      if (isMounted) {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setLoading(false);
      }
    }

    function handleGeolocationError() {
      getIpFallback();
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleGeolocationSuccess,
        handleGeolocationError,
        { timeout: 5000 }
      );
    } else {
      getIpFallback();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return { location, loading };
}
