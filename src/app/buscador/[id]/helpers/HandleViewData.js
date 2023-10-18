import { supabase } from "@/lib/client";

export async function HandleViewData (val, start, end, filter) {

    let query = supabase
        .from('tesis_view2')
        .select('*')
        .range(start, end)
        .ilike('titulo_palabras_clave', `%${val}%`);

    if (filter) {
        query = query.filter(filter.filterType, 'eq', filter.filterValue);
    }

    const { data, error } = await query;

    return {
        data,
        error,
    }

}
