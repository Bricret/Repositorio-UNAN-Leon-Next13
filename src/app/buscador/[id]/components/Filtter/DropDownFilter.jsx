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
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 overflow-auto">
      <nav className="flex flex-col gap-4 p-4">
        <h2 className="text-lg font-semibold text-zinc-500 text-center dark:text-zinc-400">
          Escoja un filtro
        </h2>
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
      </nav>
    </aside>
  );
};
