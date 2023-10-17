'use client';

import logoBook from "../../../../../../public/img/logoBook.webp";
import Image from "next/image";
import Link from "next/link";
import { DropDownFilter } from "../Filtter/DropDownFilter";
import { Paginator } from "./Paginator";
import { useGetData } from "@/hooks/useGetData";
import { Button } from "@material-tailwind/react";

export function InfoCards ({ title }) {

  const {  data, page, setPage, handleFilterSelect, itemsPerPage } = useGetData(title);

  return (
    <>
      {/* funcion para los filtros*/}
      <DropDownFilter onFilterSelect={(filter) => handleFilterSelect(filter)} />

      <main className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">

          {data.map(( tesi ) => (
            <div
              className="h-64 rounded-lg bg-zinc-200 bg-gray-800 flex flex-row items-center"
              key={tesi.id}
            >
              <Image
                src={logoBook}
                alt="logo"
                className="rounded-lg h-36 w-36 mx-4"
              />
              <div className="flex flex-col gap-3 text-gray-300 font-roboto w-4/5">
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
                  <span className="text-xl text-third-color">Peso: </span>
                  {tesi.peso}
                </p>

                <Link href={`/buscador/${title}/viewAll/${tesi.id}`}>
                  <Button variant="gradient" color="red"  >Ver mas...</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Paginator  setPage={ setPage } page={ page } data={ data } allPage={ itemsPerPage } />
      </main>

    </>
  );
};