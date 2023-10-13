import { supabase } from "@/lib/client";


export const UseLogs = () => {

    const out = async () => {

        const { error } = await supabase.auth.signOut()
        if (error) {
          alert(error.message);
          return
        }
    };

  return {
    out,
  }
}
