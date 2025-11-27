import { useEffect, useState } from "react";
import { useSnackbar } from "../index";

export function useLocationFetcher() {
  const { showSnackbar } = useSnackbar();

  const [location, setLocation] = useState({ lat: null, lon: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fallbackIP = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("IP API failed");

        const data = await res.json();

        if (isMounted) {
          setLocation({
            lat: data.latitude,
            lon: data.longitude,
          });
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          showSnackbar("Could not determine location", "error");
          setLoading(false);
        }
      }
    };

    const handleGeoSuccess = (pos) => {
      if (!isMounted) return;

      setLocation({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });

      setLoading(false);
    };

    const handleGeoError = () => {
      fallbackIP();
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        handleGeoSuccess,
        handleGeoError,
        { timeout: 4000 }
      );
    } else {
      fallbackIP();
    }

    return () => {
      isMounted = false;
    };
  }, [showSnackbar]);

  return { location, loading };
}
