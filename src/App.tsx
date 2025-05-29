import Nav from "./nav"
import SearchBox from "./SearchBox"
import Select from "./Select"
import Countries from "./Countries"
import { useEffect, useState } from "react"
import useFetch from "./useFetch";
import { Routes,Route } from "react-router-dom"
import DetailedPage from "./DetailedPage"
import Body from "./Body"


function App() {
  let {loading,error,data}= useFetch('https://restcountries.com/v3.1/all')
  let [code,setCode]=useState(null)


  return (
    <>
      <section className="bg-Grey-50 dark:bg-Blue-950 min-h-screen ">
        <Nav/>
        <Routes>
          <Route path="/" element={<Body data={data} setCode={setCode}/>}/>
          <Route path={`/details/*`} element={<DetailedPage  code={code}/>}/>
        </Routes>
      </section>
    </>
  )
}

export default App
