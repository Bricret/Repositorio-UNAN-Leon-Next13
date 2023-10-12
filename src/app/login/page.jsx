'use client';
import AuthForm from "./AuthForm"

export default function loginPage() {
  return (
    <div className="flex flex-col w-1/2 h- mx-auto my-auto border-2 border-red-700">
    <div className="col-6">
        <h1 className="">Inicia Sesion</h1>
        <p className="">
        Agrega tu correo para iniciar
        </p>
    </div>
    <div className="col-6 auth-widget">
        <AuthForm />
    </div>
    </div>


  )
}