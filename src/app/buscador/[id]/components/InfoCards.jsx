import Image from "next/image";
import { getArtByTitle } from "../../helpers/getArtByTitle"
import logoQwick from "../../../../../public/img/qwikLogo.webp";
import Link from "next/link";

export const InfoCards = ({ title }) => {

    const tesis = getArtByTitle(title);

  return (
<main className="flex-1 overflow-auto p-4">
    <div className="grid gap-4">
        {
            tesis.map(art => (
                <div className="h-64 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex flex-row items-center" key={art.link}>
                    <Image 
                        src={logoQwick} 
                        alt={art.title} 
                        className="rounded-lg h-36 w-36 mx-4"    
                    />
                    <div className="flex flex-col">
                        <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Titulo: </span>{art.title}</p>
                        <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Autor: </span>{art.autor}</p>
                        <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Fecha: </span>{art.fecha}</p>
                        <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Facultad: </span>{art.facultad}</p>
                        <Link href={`/buscador/${title}/viewAll`}>
                                mas info...
                        </Link>
                    </div>
                </div>  
            ))
        }
    </div>
</main>
  )
}
