'use client'

import { AiOutlineSearch } from "react-icons/ai";
import { UseForm } from "../../../hooks/useForm";
import { useRouter } from 'next/navigation';
import { useState } from "react";


export const Search = () => {

  const { formState, onInputChange } = UseForm();
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchText = encodeURIComponent(formState.searchText);
    searchText = searchText.replace(/%20/g, '+');
    if (formState.searchText === undefined || formState.searchText.length <= 1 ){
      setError(true);
    } else {
      router.push(`/${searchText.toLocaleLowerCase()}`);
    }
  }

  return (
    <>
        <form onSubmit={ handleSubmit } className="flex flex-col md:flex-row justify-start items-center gap-4 font-poppins font-semibold px-8 relative" >

            <input 
                type= "text"
                name="searchText"
                placeholder= "Escribe el nombre de examenes de grado o tesis"
                className= "sm:w-full w-full md:w-10/12 h-8 md:h-14 rounded-md sm:text-lg text-xs border-none ring-2 ring-red-300 focus:ring-red-500 focus:ring-2 px-10 focus:outline-none"
                value={ formState.name }
                onChange={ onInputChange }
            />
            <div className="absolute md:inset-y-0 mt-1 md:mt-0  left-10 flex items-center text-2xl text-slate-600">
                <AiOutlineSearch />
            </div>

            <button type="submit" className=" bg-primary-color rounded-md text-slate-50 text-xs md:text-base w-32 md:w-2/12 h-8 md:h-14">Buscar</button>
        </form>
        {error && <p className="text-red-500 mt-3">El texto de búsqueda debe tener más de un carácter.</p>}
    </>
  )
}