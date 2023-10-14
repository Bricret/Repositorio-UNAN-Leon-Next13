'use client';


import { useGetTesis } from "@/hooks/useGetTesis";
import { inputs } from "./inputs"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/lib/client";

export const TesisForm = () => {
    const router = useRouter();
    
    const { handleGetTesis, handleSubmitTesis } = useGetTesis();

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
          if (!session){
            router.push('/login');
          }
      })
      }, [ router ])

  return (
    <>
    <div className="flex w-96 flex-col gap-6">
        <h1 className="mt-3">Ingrese la nueva tesis</h1>
        <form className="space-y-4" onSubmit={ handleSubmitTesis }>
            {
                inputs.map((input) => (
                    <div className="relative h-10 w-full min-w-[200px]" key={input.id}>
                        <input 
                            name={ input.name }
                            className={ input.styleinput } 
                            placeholder=''
                            onChange={ handleGetTesis }
                            required={true}
                        />
                        <label className={ input.styleLabel }>{ input.name }</label>
                    </div>
                ))
            }
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Guardar
            </button>
        </form>
    </div>
    </>
    )
}
