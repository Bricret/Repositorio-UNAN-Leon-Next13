'use client';

import { HandleViewData } from "@/app/buscador/[id]/helpers/HandleViewData";
import { useEffect, useState } from "react";

export const useGetData = ( title,  ) => {

    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const itemsPerPage = 5;
    
    const handleFilterSelect = (filter) => {
      const start = page * itemsPerPage;
      const end = start + itemsPerPage - 1;
    
      HandleViewData(title, start, end, filter)
        .then(({ data }) => {
          setData(data);
        });
    };
  
    useEffect(() => {
      const start = page * itemsPerPage;
      const end = start + itemsPerPage - 1;
  
      HandleViewData(title, start, end)
        .then(({ data }) => {
          setData(data);
        });
  
    }, [page, title]);

  return {
    data,
    page,
    setPage,
    handleFilterSelect,
    itemsPerPage,
  }
}
