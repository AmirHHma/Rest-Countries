import Nav from "./nav"
import {  useState } from "react"
import { Routes,Route } from "react-router-dom"
import DetailedPage from "./DetailedPage"
import Body from "./Body"


function App() {
  let [code,setCode]=useState(null)


  return (
    <>
      <section className="bg-Grey-50 dark:bg-Blue-950 min-h-screen ">
        <Nav/>
        <Routes>
          <Route path="/Rest-Countries" element={<Body setCode={setCode}/>}/>
          <Route path={`/details/*`} element={<DetailedPage  code={code}/>}/>
        </Routes>
      </section>
    </>
  )
}

export default App
