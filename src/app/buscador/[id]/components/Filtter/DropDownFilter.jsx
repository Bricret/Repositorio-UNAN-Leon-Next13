'use state'
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import  filtros  from "@/app/data/filtros"
import { useState } from "react";

export const DropDownFilter = () => {
    
    const [show, setShow] = useState(null);

    return (
        <div className="space-y-4">
            {
                filtros.map((filtro, index) => (
                    <div className="relative flex flex-col items-center rounded-lg " key={filtro.id}>
                        <button 
                            className="bg-yellow-200 p-2 w-full flex items-center justify-between font-bold text-sm rounded-lg tracking-wider border-4 border-transparent active:border-[#090d13] duration-300 active:text-[#090d13]"
                            onClick={() => setShow(show === index ? null : index)}
                        >
                            {filtro.title}
                            {show !== index ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                        </button>
                        {show === index && (
                            <div className="relative bg-yellow-200 flex flex-col items-start rounded-lg p-2 w-full mt-1">
                                {filtro.tipos.map((tipo, index) => (
                                    <div key={index} className=" w-full justify-between p-2 hover:bg-yellow-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-black border-l-4">
                                        <h3 className="flex font-bold font-roboto">{tipo}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}
