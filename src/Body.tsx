import SearchBox from "./SearchBox"
import Select from "./Select"
import Countries from "./Countries"
import useFetch from "./useFetch"
import { useState,useEffect, type SetStateAction, type Dispatch } from "react"
import LoadingSpinner from "./LoadingSpinner"

interface BodyProps {
  setCode: Dispatch<SetStateAction<string>>;
}
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



function Body({setCode}:BodyProps) {
  let {loading,error,data}= useFetch<country>('https://restcountries.com/v3.1/all')
  let [Dta,setDta]=useState<country[] |null>([])
  let [name,setName]=useState('')

  useEffect(()=>{
    if(data){
      setDta(data)
    }
  },[data]) 

  if(loading)return <LoadingSpinner/>
  if(error)return <h1>{error}</h1>
  


    return (  <div className="px-10">
          <div className="grid lg:grid-cols-2 mt-10 align-bottom">
          <SearchBox setName={setName} setDta={setDta} data={data}/>
          <Select name={name} setDta={setDta} data={data}/>
        </div>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10   mt-10  ">
           {/* @ts-ignore */}
          <Countries setCode={setCode} Dta={Dta} />
        </div>
        </div>);
}

export default Body;