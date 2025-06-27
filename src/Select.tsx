import { useEffect, useRef } from "react";
//@ts-ignore
function Select({setDta,data,name}) {
    let select=useRef<HTMLSelectElement>(null)
    useEffect(()=>{//@ts-ignore
        select.current.value='all'
    },[name])

    const handleChange=(e:Event)=>{//@ts-ignore
        const value=e.target.value
        const regex = new RegExp(value, 'gi');//@ts-ignore
        let newData=data.filter(dt=>dt.region.match(regex)&& dt)
        setDta(newData)
    }
    return ( <>
     {/* @ts-ignore */}<div className="relative justify-self-start dark:shadow-none  lg:justify-self-end flex shadow-round rounded-lg  items-center max-sm:mt-10 sm:mt-10 lg:mt-0">
        <select ref={select} onChange={e=>handleChange(e)} className="p-4 dark:bg-Blue-900 dark:text-White    min-w-48 focus:outline-none  "  name="region" id="1">
            <option  hidden value="all">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="">All</option>
        </select>

    </div>
    </> );
}

export default Select;