import SearchBox from "./SearchBox"
import Select from "./Select"
import Countries from "./Countries"
import useFetch from "./useFetch"
import { useState,useEffect } from "react"
function Body({setCode}) {
  let {loading,error,data}= useFetch('https://restcountries.com/v3.1/all')
  let [Dta,setDta]=useState(data)
  let [name,setName]=useState('')
  
  useEffect(()=>{
    setDta(data)
  },[data])
    return (  <div className="px-10">
          <div className="grid lg:grid-cols-2 mt-10 align-bottom">
          <SearchBox setName={setName} setDta={setDta} data={data}/>
          <Select name={name} setDta={setDta} data={data}/>
        </div>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10   mt-10  ">
          <Countries setCode={setCode} Dta={Dta} />
        </div>
        </div>);
}

export default Body;