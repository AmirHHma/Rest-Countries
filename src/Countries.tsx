import type React from "react";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

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

interface countriesProps{
    Dta:country[],
    setCode:Dispatch<SetStateAction<string>>
}


 function Countries({Dta,setCode}:countriesProps) {
    


    function handleClick(e:React.MouseEvent<HTMLDivElement>){
        let countryCode=e.currentTarget.dataset.code
        if(countryCode){
            setCode(countryCode)
        }
    }
    
if(Dta?.length==0)return <h1>country was not found</h1>
    return ( 
    <>
        {Dta?.map((country,index)=>{
        return(
            <Link key={index} to={`/details?${country.ccn3}`}>
                <div onClick={e=>handleClick(e)} key={index} data-code={country.ccn3} className="rounded-lg cursor-pointer justify-self-center overflow-hidden
                 bg-White dark:bg-Blue-900 dark:shadow-none dark:text-Grey-50 shadow-round max-sm:w-full sm:w-full hover:scale-105 transition">
                <img className="w-full aspect-video" src={country.flags.png} alt="country" />
                    <div className="p-10">
                        <h2 className="font-bold text-2xl pb-6">{country.name.common}</h2>
                        <h3><span className="font-semibold text-[18px]">Population:</span>{country.population}</h3>
                        <h3><span className="font-semibold text-[18px]">Region:</span>{country.region}</h3>
                        <h3 className="pb-5"><span className="font-semibold text-[18px] ">Capital:</span>{country.capital}</h3>
                    </div>
                </div>
        </Link>
        )
    })}
    </> );
}

export default Countries;