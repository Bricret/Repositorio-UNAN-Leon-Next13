'use client';

import { DropDownFilter } from "../Filtter/DropDownFilter";
import { useGetData } from "@/hooks/useGetData";
import { Loading } from "@/app/components/options/Loading";
import { UnicCards } from "./UnicCards";
import { TesisNotFound } from "@/app/components/options/TesisNotFound";

export function InfoCards({ title }) {
  
  // custom hook para obtener los datos de la api y la paginacion.
  const { data, handleFilterSelect, loading, page, setPage, itemsPerPage } = useGetData(title); 
  
  return (
    <>
      {/* funcion para los filtros*/}
      <DropDownFilter onFilterSelect={(filter) => handleFilterSelect(filter)} />
        
        {/* funcion para la paginacion*/}
        {loading ? (
            <Loading />
          ) : (
            data && data.length > 0 ? (
              <UnicCards title={title} data={ data } page={page} setPage={setPage} itemsPerPage={itemsPerPage}/>
            ) : (
              <TesisNotFound />
            )
          )}
    </>
  );
};