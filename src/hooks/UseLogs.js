import { supabase } from "@/lib/client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export const UseLogs = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

    //funcion para cerrar sesion
    const onLogout = async () => {

        const { error } = await supabase.auth.signOut()
        if (error) {
          alert(error.message);
        }
    };

    //funcion para iniciar sesion
    const onSignIn = async (e) => {
      e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          alert("Error al iniciar sesion, verifique sus credenciales");
          router.push("/login");
        } else {
          router.push("/");
        }
      };

  return {
    onLogout,
    onSignIn,
    setEmail,
    setPassword,
    router,
  }
}
