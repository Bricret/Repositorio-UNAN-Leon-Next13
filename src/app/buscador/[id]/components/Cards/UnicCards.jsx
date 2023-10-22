'use client';
import logoBook from "../../../../../../public/img/logoBook.webp";
import Image from "next/image";
import Link from "next/link";
import { Paginator } from "./Paginator";


export const UnicCards = ({ title, data, page, setPage, itemsPerPage }) => {

  return (
    <section className="flex-1 overflow-x-auto p-4 grid gap-4">
      {data.map(( tesi ) => (
        <article
          className="rounded-lg w-full bg-zinc-800 flex flex-row items-center py-4 px-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100"
          key={tesi.id}
        >
          <Image
            src={logoBook}
            alt="logo"
            className="rounded-lg h-36 w-40 mx-4 object-cover hidden md:block"
          />
          <div className="flex flex-col gap-3 text-gray-300 font-roboto">
            <p>
              <span className="text-xl text-third-color ">Titulo: </span>
              {tesi.titulo}
            </p>
            <p>
              <span className="text-xl text-third-color">Autor: </span>
              {tesi.autor}
            </p>
            <p>
              <span className="text-xl text-third-color">Fecha: </span>
              {tesi.fecha}
            </p>
            <p>
              <span className="text-xl text-third-color">Carrera: </span>
              {tesi.carrera}
            </p>

            <Link href={`/buscador/${title}/viewAll/${tesi.id}`} className="bg-primary-color opacity-80 w-24 text-white rounded-lg py-2 px-4 font-semibold">
                Ver más
            </Link>
          </div>
        </article>
        ))}
        <Paginator  setPage={ setPage } page={ page } data={ data } allPage={ itemsPerPage } />
    </section>
  )
}
