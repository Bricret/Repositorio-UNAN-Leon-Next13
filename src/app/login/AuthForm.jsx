'use client'

import { UseLogs } from '@/hooks/UseLogs';
import Link from 'next/link';

export default function AuthForm() {

  const { onSignIn, setEmail, setPassword } = UseLogs()

  return (
    <form onSubmit={ onSignIn }>
    <div className='py-5'>
          <label className="block mb-2 text-base font-bold text-zinc-700">Correo
            <input 
              className="input" 
              name="text" 
              type="email" 
              placeholder="Ingrese su correo" 
              onChange={ e => setEmail(e.target.value) } />
          </label>
    </div>
      <div>
          <label className="block mb-2 text-base font-bold text-zinc-700">Contraseña
            <input 
              className="input" 
              name="text" 
              type="password" 
              placeholder="Ingrese su contraseña" 
              onChange={ e => setPassword(e.target.value) }
              />
            </label>
      </div>

      <div className='text-sm text-zinc-500 hover:text-zinc-900 pt-3 pl-3 cursor-pointer'>
        <a>Olvido su contraseña</a>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-primary-color text-white font-bold py-2 px-4 rounded" type='submit'>
          Iniciar sesion
        </button>
        <Link href='/' className="bg-primary-color text-white font-bold py-2 px-4 rounded ml-3">
          Regresar
        </Link>
      </div>
    </form>
  )
}