'use client'

import { supabase } from "@/lib/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const TableOfTesis = () => {
    const router = useRouter();
    const [tesis, setTesis] = useState([]);

    const getTesis = async () => {
        const { data, error } = await supabase
        .from('tesis')
        .select('*')
        setTesis(data);
        console.log(data, error)
    }

    useEffect(() => {

        getTesis();

        supabase.auth.onAuthStateChange((event, session) => {
          if (!session){
            router.push('/login');
          } else {
            router.push('/settings/edit');
          }
      })
      }, [ router ])


  return (
    <>
        <div className="container w-full mx-auto overflow-auto">
            <div className="p-4 mt-2 lg:mt-0 rounded shadow bg-white">
                <table className="stripe hover w-full py-4 min-w-max text-sm">
                    <thead className="bg-secondary-color text-white text-center">
                        <tr>
                            <th className="border border-slate-500 ">id</th>
                            <th className="border border-slate-500">autor</th>
                            <th className="border border-slate-500">carrera</th>
                            <th className="border border-slate-500">fecha</th>
                            <th className="border border-slate-500 ">palabras_clave</th>
                            <th className="border border-slate-500">peso</th>
                            <th className="border border-slate-500">tipo_de_tesis</th>
                            <th className="border border-slate-500">titulo</th>
                            <th className="border border-slate-500">link</th>
                            <th className="border border-slate-500 ">Ajustes</th> 
                        </tr>
                    </thead>
                    <tbody className="text-start ">
                        {tesis.sort((a, b) => a.id - b.id).map((tesis) => (
                            <tr key={tesis.id}>
                                <td className="border border-slate-700 ">{tesis.id}</td>
                                <td className="border border-slate-700 max-w-[20rem] overflow-auto whitespace-normal">{tesis.autor}</td>
                                <td className="border border-slate-700 ">{tesis.carrera}</td>
                                <td className="border border-slate-700 ">{tesis.fecha}</td>
                                <td className="border border-slate-700 max-w-[20rem] overflow-auto whitespace-normal">{tesis.palabras_clave}</td>
                                <td className="border border-slate-700 ">{tesis.peso}</td>
                                <td className="border border-slate-700 ">{tesis.tipos_de_tesis}</td>
                                <td className="border border-slate-700 max-w-[20rem] overflow-auto whitespace-normal">{tesis.titulo}</td>
                                <td className="border border-slate-700  max-w-[20rem] overflow-auto whitespace-normal">{tesis.link}</td>
                                <td className="border border-slate-700 ">
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                        Editar
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
)
}