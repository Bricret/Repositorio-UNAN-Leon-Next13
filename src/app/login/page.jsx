'use client';
import AuthForm from "./AuthForm"
import  './style.css'
import heroe from "../../../public/img/edificioUNAN.webp";


export default function loginPage() {
  return (
<div className="grid place-items-center md:h-screen h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroe.src})` }}>
  <div className="col-start-1 row-start-1 bg-black bg-opacity-70 w-full h-screen"></div>
    <div className="w-auto mx-auto my-auto max-w-sm relative p-8 rounded-md text-black bg-white col-start-1 row-start-1">
        <div className="col-6">
            <h1 className="text-2xl pb-3 font-roboto font-bold">Repositorio <span className="text-primary-color">UNAN</span> - <span className="text-secondary-color">LEON</span></h1>
            <p className="text-zinc-400 text-center">Inicia sesion con tu cuenta</p>
            <AuthForm />
        </div>
    </div>
</div>
  )
}