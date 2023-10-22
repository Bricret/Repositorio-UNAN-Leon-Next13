'use client';
import { useGetTesis } from "@/hooks/useGetTesis";
import { inputs } from "../../data/inputs"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/lib/client";
import { AlertForTesis } from "./AlertForTesis";


export function TesisForm() {
    const router = useRouter();
    
    const { handleGetTesis, handleSubmitTesis } = useGetTesis();

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
          if (!session){
            router.push('/login');
          }
      })
      }, [ router ]);

  return (
    <>
        <main className="flex-1 overflow-auto p-4">
            <article className="grid gap-4">
                <h1 className="text-center md:text-3xl text-xl font-extrabold font-poppins text-[#2E2D29CC] cursor-default">Ingrese una nueva tesis</h1>
                <form className="space-y-6" onSubmit={ handleSubmitTesis }>
                    {
                        inputs.map((input) => (
                            <div className="relative h-10 w-full" key={input.id}>
                                <input 
                                    name={ input.name }
                                    className={ input.styleinput } 
                                    placeholder=''
                                    onChange={ handleGetTesis }
                                    required
                                    id={ input.id }
                                />
                                <label className={ input.styleLabel } htmlFor={input.id}>{ input.name }</label>
                            </div>
                        ))
                    }
                    <AlertForTesis accion={'Agregar'} text={'La tesis se ha agregado correctamente en la base de datos!'} title={'Tesis Agregada'}/>
                </form>
            </article>
        </main>
    </>
    );
};
