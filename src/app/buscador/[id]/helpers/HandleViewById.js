import { supabase } from "@/lib/client";

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