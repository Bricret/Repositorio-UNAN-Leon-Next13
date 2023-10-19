'use client';

import { DropDownFilter } from "../Filtter/DropDownFilter";
import { useGetData } from "@/hooks/useGetData";
import { Loading } from "@/app/components/options/Loading";
import { UnicCards } from "./UnicCards";
import { TesisNotFound } from "@/app/components/options/TesisNotFound";

export function InfoCards ({ title }) {

  const { data, handleFilterSelect, loading } = useGetData(title);

  return (
    <>
      {/* funcion para los filtros*/}
      <DropDownFilter onFilterSelect={(filter) => handleFilterSelect(filter)} />
        
        {/* funcion para la paginacion*/}
        {loading ? (
            <Loading />
          ) : (
            data && data.length > 0 ? (
              <UnicCards title={title}  />
            ) : (
              <TesisNotFound />
            )
          )}
    </>
  );
};