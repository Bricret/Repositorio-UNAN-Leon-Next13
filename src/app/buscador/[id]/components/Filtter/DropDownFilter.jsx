'use client';
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import filtros from "@/app/data/filtros";

export const DropDownFilter = ({ onFilterSelect }) => {

  const [show, setShow] = useState(null);

  const handleFilterSelect = (filterType, filterValue) => {
  onFilterSelect({ filterType, filterValue });
  setShow(null);
  };


  return (
<main className="w-64 border-r border-zinc-500 dark:border-zinc-700 overflow-auto">
  <nav className="flex flex-col gap-6 ">
    <h2 className="text-lg font-semibold text-zinc-500 text-center dark:text-zinc-500 pt-4">
      Escoja un filtro
    </h2>
    <div className="space-y-6">
      {filtros.map((filtro) => (
        <div className="relative " key={filtro.id}>
          <h1 className="text-zinc-500 text-lg font-semibold ml-4">{filtro.title}</h1>
          <div className="relative rounded-lg p-4 w-full mt-1">
            {filtro.tipos.map((tipo) => (
              <div
                key={tipo}
                className={`w-full justify-start p-2 cursor-pointer rounded-lg focus:bg-zinc-500`}
                onClick={() => handleFilterSelect(filtro.title, tipo.toLocaleLowerCase())} 
              >
                <h3 className="flex font-bold font-roboto text-[#BBBBBB] hover:text-[#EDEDED] transition-colors duration-200">
                  {tipo}
                </h3>
              </div>
            ))}
          </div>
          <div className="block border-b border-zinc-500"></div>
        </div>
      ))}
    </div>
  </nav>
</main>
  );
};







/*

        <div className="space-y-4">
          {filtros.map((filtro, index) => (
            <div className="relative" key={filtro.id}>
              <button
                className="bg-red-500 p-2 w-full flex items-center justify-between font-bold text-sm rounded-lg tracking-wider border-4 border-transparent active:border-[#090d13] duration-300 active:text-[#090d13]"
                onClick={() => setShow(show === index ? null : index)}
              >
                {filtro.title}
                {show !== index ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
              </button>
              {show === index && (
                <div className="relative bg-red-300 rounded-lg p-2 w-full mt-1">
                  {filtro.tipos.map((tipo) => (
                    <div
                      key={tipo}
                      className="w-full justify-between p-2 hover:bg-red-400 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4"
                      onClick={() => handleFilterSelect(filtro.title, tipo.toLocaleLowerCase())}
                    >
                      <h3 className="flex font-bold font-roboto">{tipo}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

*/