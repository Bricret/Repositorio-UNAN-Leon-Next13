'use client'

import { inputs } from "@/app/data/inputs"
import { supabase } from "@/lib/client";
import { useEffect } from "react";




export const UpdateForm = ({ Id }) => {

    const fn = async (val) => {
        let { data, error } = await supabase
        .from('tesis')
        .select("*")
        .eq( 'id', val );
        console.log(data, error);
    }

    useEffect(() => {
        fn(Id); 
    }, [Id]);


  return (
    <main className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
            <h1 className="mt-2 text-center font-bold text-xl font-roboto">Actualicé la tesis seleccionada</h1>
            <form className="space-y-4">
                {
                    inputs.map((input) => (
                        <div className="relative h-10 w-full" key={input.id}>
                            <input 
                                name={ input.name }
                                className={ input.styleinput } 
                                placeholder=''
                                required={true}
                            />
                            <label className={ input.styleLabel }>{ input.name }</label>
                        </div>
                    ))
                }
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    type="submit">
                    Actualizar
                </button>
            </form>
        </div>
    </main>
    )
}
