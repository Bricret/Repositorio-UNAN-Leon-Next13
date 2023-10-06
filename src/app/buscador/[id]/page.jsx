'use client'
import { InfoCards } from "./components/Cards/InfoCards";
import { DropDownFilter } from "./components/Filtter/DropDownFilter";


export default function dashPage ({params}) {

    const { id } = params;
    const decodedId = decodeURIComponent(id);
    const searchWord = decodedId.replace(/-/g, ' ');

    return (
        <div className="flex flex-1 overflow-hidden">
            <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 overflow-auto">
                <nav className="flex flex-col gap-4 p-4">
                    <h2 className="text-lg font-semibold text-zinc-500 text-center dark:text-zinc-400">Escoja un filtro</h2>
                        <DropDownFilter />
                </nav>
            </aside>
            <InfoCards  title={searchWord} />
        </div>
    )
}