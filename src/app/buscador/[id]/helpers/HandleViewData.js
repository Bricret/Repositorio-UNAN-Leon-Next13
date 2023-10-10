import { supabase } from "@/lib/client";

export async function HandleViewData (val, start, end) {

    let query = supabase
        .from('tesis_view')
        .select('*')
        .range(start, end)
        .ilike('titulo_palabras_clave', `%${val}%`);

    const { data, error } = await query;

    return {
        data,
        error,
    }

}
