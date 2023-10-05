'use client'
// import Image from "next/image";
// import logoQwick from "../../../../../public/img/qwikLogo.webp";
// import Link from "next/link";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../../firebase";

export const InfoCards = ({ title }) => {

    const testFirestore = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "pablo",
              last: "emilio",
              born: 1998
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        };

  return (
<main className="flex-1 overflow-auto p-4">
    {/* <div className="grid gap-4">
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
    </div> */}
    <button onClick={testFirestore}>
        test firebase
    </button>
</main>
  )
}
