'use client'

import { useGetTesis } from "@/hooks/useGetTesis";
import { supabase } from "@/lib/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TableTesis } from "./TableTesis";

export const TableOfTesis = () => {
    const router = useRouter();
    
    const { tesis, getAllTesis, handleDeleteTesis } = useGetTesis();
    
    useEffect(() => {

        getAllTesis();

        supabase.auth.onAuthStateChange((event, session) => {
            if (!session){
              router.push('/login');
            } 
        });

      }, [ router, getAllTesis ]);


  return (
    <>
    <section className="container w-full mx-auto overflow-y-auto">
        <article className="p-4 mt-2 lg:mt-0 rounded shadow bg-white overflow-y-auto">
            <TableTesis tesis={ tesis } handleDeleteTesis={ handleDeleteTesis } />
        </article>
    </section>
    </>
)
}