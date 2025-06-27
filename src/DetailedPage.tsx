import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
interface country{
    ccn3:string;
    flags:{
        png:string;
        svg:string;
    };
    name:{
        common:string;
        official:string;
    };
    population:string;
    region: string;
    capital?: string[] | string;
  }
//@ts-ignore
function DetailedPage({ code }) {
  let { loading, error, data } = useFetch("https://restcountries.com/v3.1/all");
    let loc=useLocation().search.slice(1)
    let [country,updateCountry]=useState<country>()
    useEffect(()=>{//@ts-ignore
        let temp=data?.find(dta=>dta.ccn3==loc)//@ts-ignore
        updateCountry(temp)
    },[data])
    
     if (loading) return <LoadingSpinner/>
  if (error) return <div>Error loading data</div>;
  if (!country) return <div>Country not found</div>;
    
  return (
    <>
      <section className="px-10 max-sm:px-0 grid ">
        
        <Link
          to={"/Rest-Countries"}
          className="inline-flex items-center justify-center dark:text-Grey-50 px-10 py-2 pr-11 max-sm:ml-5   mt-14 shadow-sm-round place-self-start"
        >
          <i className="text-2xl">
            <IoIosArrowRoundBack />
          </i>
          <h5>Back</h5>
        </Link>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 sm:gap-20 xl:gap-10 max-sm:w-11/12 place-self-center mt-20 dark:text-Grey-50">
          {/* @ts-ignore */}
          <img className="shadow-sm-round dark:shadow-none" src={country?.flags?.svg} alt="" />
          <div className="">
             {/* @ts-ignore */}
            <h1 className="text-4xl font-bold py-5">{country.name?.common}</h1>
            <div className="max-sm:grid-cols-1 grid sm:grid-cols-2 items-baseline">
              <div >
                 {/* @ts-ignore */}
                
                 <h6 className="pb-1.5"><span className="font-semibold ">Native Name:</span>{Object.entries(country.name.nativeName).map(([key,value])=>value.official?? value.common)}</h6>
               
                {/* @ts-ignore */} <h6 className="pb-1.5"><span className="font-semibold ">Population:</span>{country.population}</h6>
                 {/* @ts-ignore */}<h6 className="pb-1.5"><span className="font-semibold ">Region:</span>{country.region}</h6>
                 {/* @ts-ignore<h6 className="pb-1.5"><span className="font-semibold ">Sub Region:</span>{country.subregion}</h6> */}
                <h6 className="pb-1.5"><span className="font-semibold ">Capital:</span>{country.capital}</h6>
              </div>
              {/* @ts-ignore */} <div className="pt-8 [&>h6]:pb-1.5 self-baseline">
                 {/* @ts-ignore */}<h6><span className="font-semibold">Top Level Domain:</span>{country.tld}</h6>
                 {/* @ts-ignore */}<h6><span className="font-semibold">Currencies:</span>{Object.keys(country.currencies).map(item=>country.currencies[item].name)}</h6>
                <h6><span className="font-semibold">Languages:</span>{Object.entries(country.languages).map(([key,value])=>value+' ')}</h6>
              </div>
            </div>
            <div className="mt-10">
                 {/* @ts-ignore */}<h6 className="text-xl font-semibold mb-5">Border Countries:</h6>
                <div className="flex gap-3 flex-wrap justify-center">{country.borders?.map((border)=><span key={border} className="py-1 dark:shadow-none dark:bg-Blue-900 px-10 rounded-sm shadow-sm-round">{border}</span>)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailedPage;
