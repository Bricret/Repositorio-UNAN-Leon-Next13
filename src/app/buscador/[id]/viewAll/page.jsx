import { getArtByTitle } from "../../helpers/getArtByTitle";

export default function viewPage ({params}) {

    const { id } = params;

    return (
        <>
            <main className="flex-1 overflow-auto p-4">
                <div className="grid gap-4">
                    <div className="h-64 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex flex-row items-center" >
                            <div className="flex flex-col">
                                <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Titulo: </span>{tesis.title}</p>
                                <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Autor: </span>{tesis.autor}</p>
                                <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Fecha: </span>{tesis.fecha}</p>
                                <p className="dark:text-zinc-300"><span className="text-xl dark:text-white">Facultad: </span>{tesis.facultad}</p>
                            </div>
                    </div> 
                </div>
            </main>
        </>
    )
}