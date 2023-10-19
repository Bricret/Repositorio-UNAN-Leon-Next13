import { supabase } from "@/lib/client";

// peticion a la api para traer los datos de la tesis y filtrarlos por titulo o carrera.
export async function HandleViewById (val) {

    let { data, error } = await supabase
    .from('tesis')
    .select("*")
    .eq( 'id', val );

    return {
        data,
        error,
    }
}