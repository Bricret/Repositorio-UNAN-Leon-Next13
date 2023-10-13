'use client'

import { useState } from 'react';
import { supabase } from '@/lib/client';


export default function AuthForm() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      console.log (data, error);
    };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
      <div className='py-5'>
            <label className="block mb-2 text-base font-bold text-zinc-700">Correo</label>
            <input 
              className="input" 
              name="text" 
              type="email" 
              placeholder="Ingrese su correo" 
              onChange={ e => setEmail(e.target.value) } />
        </div>
        <div>
            <label className="block mb-2 text-base font-bold text-zinc-700">Contraseña</label>
            <input 
              className="input" 
              name="text" 
              type="password" 
              placeholder="Ingrese su contraseña" 
              onChange={ e => setPassword(e.target.value) }/>
        </div>

        <div className='text-sm text-zinc-500 hover:text-zinc-900 pt-3 pl-3'>
          <a href='#'>Olvido su contraseña</a>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-primary-color text-white font-bold py-2 px-4 rounded">
            Iniciar sesion
          </button>
        </div>
        
        {/* {data && <p className="text-red-500 text-xs pt-2">{error}</p>} */}

      </form>
    </div>
  )
}