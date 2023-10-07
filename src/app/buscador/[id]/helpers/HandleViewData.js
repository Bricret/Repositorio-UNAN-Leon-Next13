import { supabase } from "@/lib/client";

export async function HandleViewData (val, filter) {

    let query = supabase.from('tesis_view').select('*').ilike('titulo_palabras_clave', `%${val}%`);

    if (filter) {
        switch (filter.filterType) {
        case 'Carreras':
            query = query.eq('carrera', filter.filterValue);
            break;
        case 'Fecha de Publicacion':
            query = query.eq('fecha', filter.filterValue);
            break;
        case 'Tipo de Tesis':
            query = query.eq('tipo', filter.filterValue);
            break;
        default:
            break;
        }
    }

    const { data, error } = await query;

    return {
        data,
        error,
    }

}
