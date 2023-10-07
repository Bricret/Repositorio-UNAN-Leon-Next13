import logoBook from "../../../../../../public/img/logoBook.webp";
import Image from "next/image";
import Link from "next/link";
import { DropDownFilter } from "../Filtter/DropDownFilter";

export const InfoCards = ({ title }) => {

  return (
    <>
      <DropDownFilter />
      <main className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          
          {/* -------- suspendido temporalmente ----- */}
          {/* {tesis.map((tesi, index) => (
            <div
              className="h-64 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex flex-row items-center"
              key={index}
            >
              <Image
                src={logoBook}
                alt="logo"
                className="rounded-lg h-36 w-36 mx-4"
              />
              <div className="flex flex-col gap-3 dark:text-zinc-300 font-roboto w-4/5">
                <p>
                  <span className="text-xl dark:text-third-color ">Titulo: </span>
                  {tesi.titulo}
                </p>
                <p>
                  <span className="text-xl dark:text-third-color">Autor: </span>
                  {tesi.autor}
                </p>
                <p>
                  <span className="text-xl dark:text-third-color">Fecha: </span>
                  {tesi.fecha}
                </p>
                <p>
                  <span className="text-xl dark:text-third-color">Peso: </span>
                  {tesi.peso}
                </p>

                <Link
                  href={`/buscador/${title}/viewAll`}
                  className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-28 mt-3"
                >
                  ver mas...
                </Link>
              </div>
            </div>
          ))} */}
        </div>
      </main>
    </>
  );
};