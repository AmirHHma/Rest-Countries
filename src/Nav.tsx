import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

function Nav() {
    let dark=JSON.parse(localStorage.getItem('isDark'))
    let [isDark,setDark]=useState(dark ?? false)

    
    useEffect(()=>{
        const html=document.documentElement
        isDark ? html.classList.add('dark') : html.classList.remove('dark')
        localStorage.setItem('isDark',JSON.stringify(isDark))
    },[isDark])
    
    return ( <nav className="flex justify-between px-6 lg:px-20 py-10  shadow-bottom dark:shadow-none dark:bg-Blue-900 dark:text-White">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <div className="flex flex-row-reverse  items-center gap-1 ">
            <button  onClick={()=>setDark(prev=>!prev)}>Dark Mode</button>
            <i >{isDark ? <IoMoonSharp/> : <IoMoonOutline/>}</i>
        </div>
    </nav> );
}

export default Nav;