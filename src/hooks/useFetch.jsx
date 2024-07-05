import { useEffect, useState } from "react";
import axiosBase from "../api";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataLoad = async () => {
      setLoading(true);
      try {
        const res = await axiosBase.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    dataLoad();
  }, [url]);

  return { data, loading, error };
};
