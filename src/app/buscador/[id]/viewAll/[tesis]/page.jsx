import { Image } from "next/dist/client/image-component";
import logo from "../../../../../../public/img/CT.webp";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { supabase } from "@/lib/client";

export default async function viewPage ({params}) {

    const { tesis } = params;

    let { data, error } = await supabase
    .from('tesis')
    .select("*")
    .eq( 'id', tesis );

    return (
        <main className="flex-1 overflow-auto p-4">
            <div className="grid">
            <div className="h-[28rem] gap-16 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex flex-row items-start pt-8 ">
            <div>
                <Image 
                    src={logo} 
                    alt="logo"
                    className="rounded-lg ml-6 w-96 h-96 object-cover" 
                />
            </div>
            {
                data.map((tesis) => (
                    <div className="flex flex-col gap-y-4 w-[62%]" key={ tesis.id }>
                        <h1 className="border-b border-dashed border-zinc-400 text-xl text-white font-roboto">{ tesis.titulo }</h1>
                        <p className="text-white font-bold font-roboto text-xl">Autores/as: <span className="text-zinc-300 font-light text-lg">{ tesis.autor }</span></p>
                        <p className="text-white font-bold font-roboto text-xl">Carrera: <span className="text-zinc-300 font-light text-lg">{ tesis.carrera }</span></p>
                        <p className="text-white font-bold font-roboto text-xl">Fecha: <span className="text-zinc-300 font-light text-lg">{ tesis.fecha }</span></p>
                        <p className="text-white font-bold font-roboto text-xl">Palabras_Clave: <span className="text-zinc-300 font-light text-lg">{ tesis.palabras_clave }</span></p>
                        <p className="text-white font-bold font-roboto text-xl">Peso: <span className="text-zinc-300 font-light text-lg">{ tesis.peso }</span></p>
                        <Link
                            href={`https://tailwindcss.com`}
                            className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-40 mt-3 flex flex-row items-center justify-center"
                            >
                            Descargar <BsDownload className="pl-3 w-7 h-7"/> 
                        </Link>
                    </div>
            ))}
            </div> 
            </div>
        </main>
    )
}