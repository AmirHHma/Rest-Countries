import { getCountries } from "@yusifaliyevpro/countries";
import { useEffect, useState } from "react";


export default function useFetch<T,>(url: string) {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState<T[] |null>(null);
  let [error, setError] = useState(null);
  useEffect(() => {
    const fetchDta = async () => {
      try {
        let res = await getCountries({
  fields: ["name", "capital",'population','region','tld','currencies','languages','borders','flags','ccn3'],
});
console.log(res)
        
        setData(res);
        console.log()
      } catch (err) {//@ts-ignore
        setError(err.message);
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchDta();
  }, [url]);

  return { loading, data, error };
}
