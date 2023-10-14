'use client';

import { useEffect, useState } from "react"
import { supabase } from "@/lib/client";

export const useGetTesis = () => {

    const [autor, setAutor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [tipo, setTipo] = useState('');
    const [carrera, setCarrera] = useState('');
    const [palabrasClave, setPalabrasClave] = useState('');
    const [link, setLink] = useState('');

    const handleGetTesis = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "Autor":
                setAutor(value);
                break;
            case "Título":
                setTitulo(value);
                break;
            case "Fecha":
                setFecha(value);
                break;
            case "Tipo de Tesis":
                setTipo(value);
                break;
            case "Carrera":
                setCarrera(value);
                break;
            case "Palabras clave":
                setPalabrasClave(value);
                break;
            case "Link de la Tesis":
                setLink(value);
                break;
            default:
                break;
        };
    };

    const handleSubmitTesis = async (e) => {
        e.preventDefault();
        try {
            const  { data : { user } }  = await supabase.auth.getUser();
            const userId = user.id;
            const result = await supabase.from('tesis').insert({
                autor: autor,
                titulo: titulo.toLocaleLowerCase().trim(),
                fecha: fecha,
                carrera: carrera,
                palabras_clave: palabrasClave.toLocaleLowerCase().trim(),
                tipos_de_tesis: tipo,
                link: link,
                users: userId
            });
            alert('Se ha ingresado la tesis correctamente');

        } catch (error) {
            alert('Error al ingresar la tesis');
            console.log("Error al ingresar la tesis", error);
        }
    }

    return {
        handleGetTesis,
        handleSubmitTesis
    }
}