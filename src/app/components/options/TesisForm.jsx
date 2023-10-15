'use client';
import { useGetTesis } from "@/hooks/useGetTesis";
import { inputs } from "../../data/inputs"
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
    <main className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
            <h1 className="mt-2 text-center font-bold text-xl font-roboto">Ingrese una nueva tesis</h1>
            <form className="space-y-4" onSubmit={ handleSubmitTesis }>
                {
                    inputs.map((input) => (
                        <div className="relative h-10 w-full" key={input.id}>
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
    </main>
    </>
    )
}
