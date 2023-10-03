import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <>
        <form action="#" className="flex flex-col md:flex-row justify-start items-center gap-4 font-poppins font-semibold px-8 relative" >

            <input 
                type= "text"
                className= "sm:w-full w-full md:w-10/12 h-8 md:h-14 rounded-md sm:text-lg text-xs border-none ring-2 ring-red-300 focus:ring-red-500 focus:ring-2 px-10 focus:outline-none"
                placeholder= "Escribe el nombre de examenes de grado o tesis"
            />
            <div className="absolute md:inset-y-0 mt-1 md:mt-0  left-10 flex items-center text-2xl text-slate-600">
                <AiOutlineSearch />
            </div>

            <button href='#' className=" bg-primary-color rounded-md text-slate-50 text-xs md:text-base w-32 md:w-2/12 h-8 md:h-14">Buscar</button>
        </form>
    </>
  )
}