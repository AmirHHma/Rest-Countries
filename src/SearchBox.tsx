import { IoMdSearch } from "react-icons/io";

export default ({setDta,data,setName})=>{
    const handleKeyUp=(e:Event)=>{
        const regex = new RegExp(e.target.value, 'gi'); // 'gi' flags for global and case-insensitive
        let countryArr=data.filter(dt=>dt.name.common.match(regex) && dt)
        setDta(countryArr)
        setName(e.target.value)
    }
    const handleClick=()=>{
    }
    return(
        <div className="p-5 px-8 dark:shadow-none dark:bg-Blue-900 dark:text-White  shadow-round flex items-center  max-sm:min-w-11/12 sm:w-4/5 rounded-lg max-w-2xl ">
        <i onClick={handleClick} className="text-3xl "><IoMdSearch className="text-Grey-400 dark:text-White"/></i>
        <input onKeyUp={e=>handleKeyUp(e)} placeholder="Search for a country..." className="focus:outline-0 ml-8 text-lg placeholder:text-Grey-400 w-5/6 dark:placeholder:text-White" type="search" ></input>
   </div>
    )
}
   