'use client';
import { useGetTesis } from "@/hooks/useGetTesis";
import { inputs } from "../../data/inputs"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/lib/client";
import { AlertForTesis } from "./AlertForTesis";


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
        <article className="grid gap-4">
        <h1 className="text-center md:text-3xl text-xl font-extrabold font-poppins text-[#2E2D29CC] cursor-default">Ingrese una nueva tesis</h1>
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
                <AlertForTesis type={'Guardar'} text={'La tesis se ha ingresado correctamente en la base de datos!'} title={'Tesis Guardada'} />
            </form>
        </article>
    </main>
    </>
    )
}
