import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState<object[] |null>(null);
  let [error, setError] = useState(null);
  useEffect(() => {
    const fetchDta = async () => {
      try {
        let res = await fetch(url);
        if (!res.ok)  throw new Error("failed to fetch data");
        let result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDta();
  }, [url]);

  return { loading, data, error };
}
