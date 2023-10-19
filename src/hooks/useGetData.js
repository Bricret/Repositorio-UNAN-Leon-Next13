'use client';

import { HandleViewData } from "@/app/buscador/[id]/helpers/HandleViewData";
import { useEffect, useState } from "react";

export const useGetData = ( title ) => {

    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 5;
    
    const handleFilterSelect = (filter) => {
      const start = page * itemsPerPage;
      const end = start + itemsPerPage - 1;
    
      HandleViewData(title, start, end, filter) //funcion que trae los datos de la api y los filtra por titulo y carrera.
        .then(({ data }) => {
          setLoading(false);
          setData(data);
        });
    };
  
    useEffect(() => {
      const start = page * itemsPerPage;
      const end = start + itemsPerPage - 1;
  
      HandleViewData(title, start, end)
        .then(({ data }) => {
          setLoading(false);
          setData(data);
        });
  
    }, [page, title]);

  return {
    data,
    page,
    setPage,
    handleFilterSelect,
    itemsPerPage,
    loading,
  }
}
