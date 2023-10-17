'use client'

import { inputs } from "@/app/data/inputs"
import { useGetTesis } from "@/hooks/useGetTesis";
import { supabase } from "@/lib/client";
import { useEffect } from "react";


export const UpdateForm = ({ Id }) => {

    const { autor, setAutor, titulo, setTitulo, fecha, setFecha, tipo, setTipo, carrera, setCarrera, palabrasClave, setPalabrasClave, link, setLink, handleUpdateTesis } = useGetTesis();

    useEffect(() => {
        const onViewTesis = async (val) => {
            let { data, error } = await supabase
            .from('tesis')
            .select("*")
            .eq( 'id', val );
            setAutor(data[0].autor);
            setTitulo(data[0].titulo);
            setFecha(data[0].fecha);
            setTipo(data[0].tipos_de_tesis);
            setCarrera(data[0].carrera);
            setPalabrasClave(data[0].palabras_clave);
            setLink(data[0].link);
        }
        onViewTesis(Id); 
    }, [Id, setAutor, setTitulo, setFecha, setTipo, setCarrera, setPalabrasClave, setLink]);

    // Crear un objeto que mapee los nombres de los inputs a sus estados correspondientes
    const inputStates = {
        'Autor': autor,
        'Título': titulo,
        'Fecha': fecha,
        'Tipo de Tesis': tipo,
        'Carrera': carrera,
        'Palabras clave': palabrasClave,
        'Link de la Tesis': link,
    };

    const inputSetters = {
        'Autor': setAutor,
        'Título': setTitulo,
        'Fecha': setFecha,
        'Tipo de Tesis': setTipo,
        'Carrera': setCarrera,
        'Palabras clave': setPalabrasClave,
        'Link de la Tesis': setLink,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setter = inputSetters[name];
        if (setter) {
            setter(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateTesis(Id);
    };

    return (
        <main className="flex-1 overflow-auto p-4">
            <div className="grid gap-4">
                <h1 className="mt-2 text-center font-bold text-xl font-roboto">Actualicé la tesis seleccionada</h1>
                <form className="space-y-6" onSubmit={ handleSubmit }>
                    {
                        inputs.map((input) => (
                            <div className="relative h-10 w-full" key={input.id}>
                                <label className="absolute -top-6 left-0 px-2 py-1 text-gray-600 text-xs font-bold tracking-wider" >{input.name}</label>
                                <input 
                                    name={ input.name }
                                    className="h-10 w-full border-gray-300 px-2 rounded-lg outline-none ring-2 ring-blue-300 focus:ring-blue-600 border-transparent"
                                    placeholder=''
                                    required={true}
                                    value={inputStates[input.name]} // Usar el objeto para asignar el valor correcto
                                    onChange={handleChange} // Agregar manejador de cambio
                                />
                            </div>
                        ))
                    }
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        type="submit">
                        Actualizar
                    </button>
                </form>
            </div>
        </main>
    )
}