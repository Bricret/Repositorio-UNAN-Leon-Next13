'use client'
import { InfoCards } from "./components/Cards/InfoCards";



export default function dashPage ({params}) {

    const { id } = params;
    const decodedId = decodeURIComponent(id);
    const searchWord = decodedId.replace(/-/g, ' ');

    return (
        <main className="flex flex-1 overflow-hidden">
            <InfoCards  title={searchWord} /> 
        </main>
    )
}