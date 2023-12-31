'use client';

import { useState } from "react"
import { supabase } from "@/lib/client";

// custom hook para el CRUD de las tesis en la base de datos.
export const useGetTesis = () => {

    const [autor, setAutor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [tipo, setTipo] = useState('');
    const [carrera, setCarrera] = useState('');
    const [palabrasClave, setPalabrasClave] = useState('');
    const [link, setLink] = useState('');
    const [tesis, setTesis] = useState([]);

    //extraer todas las tesis
    const getAllTesis = async () => {
        const { data, error } = await supabase
        .from('tesis')
        .select('*')
        setTesis(data);
    }

    //extraer tesis por titulo
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

    //ingresar tesis
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

        } catch (error) {
            alert('Error al ingresar la tesis');
            console.log("Error al ingresar la tesis", error);
        }
    }

    //eliminar tesis
    const handleDeleteTesis = async (id) => {
        try {
            const user = await supabase.auth.getUser();
            const { datas, error } = await supabase
            .from('tesis')
            .delete()
            .eq('users', user.data.user.id)
            .eq('id', id);
            
        } catch (error) {
            alert('Error al eliminar la tesis');
            console.log("Error al eliminar la tesis", error);
        }
    }

    //actualizar tesis
    const handleUpdateTesis = async (id) => {
        try {
            const user = await supabase.auth.getUser();
            const { datas, error } = await supabase
            .from('tesis')
            .update({
                autor: autor,
                titulo: titulo.toLocaleLowerCase().trim(),
                fecha: fecha,
                carrera: carrera,
                palabras_clave: palabrasClave.toLocaleLowerCase().trim(),
                tipos_de_tesis: tipo,
                link: link,
                users: user.data.user.id
            })
            .eq('users', user.data.user.id)
            .eq('id', id);
            
        } catch (error) {
            alert('Error al actualizar la tesis');
            console.log("Error al actualizar la tesis", error);
        }
    }

    return {
        handleGetTesis,
        handleSubmitTesis,
        handleDeleteTesis,
        handleUpdateTesis,
        getAllTesis,
        tesis,
        autor,
        titulo,
        fecha,
        tipo,
        carrera,
        palabrasClave,
        link,
        setAutor,
        setTitulo,
        setFecha,
        setTipo,
        setCarrera,
        setPalabrasClave,
        setLink
    }
}