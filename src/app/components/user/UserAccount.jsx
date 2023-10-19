import Image from "next/image"
import logo from "../../../../public/img/userLogo.webp"
import { useState } from "react"
import Link from "next/link"
import { UseLogs } from "@/hooks/UseLogs"
import { IoSettingsOutline } from "react-icons/io5"
import { MdPowerSettingsNew } from "react-icons/md"

export const UserAccount = ({size = '-right-6'}) => {

  const [clic, setClic] = useState(false)

  const { onLogout } = UseLogs();

  return (
    <>
        <Image
        alt="logo user"
        src={logo}
        className="relative inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center lg:mr-0 mx-6"
        onClick={() => setClic(prevClic => !prevClic)}
      />
      <ul
        className={`absolute z-10 flex flex-col min-w-[150px] gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none overflow-x-hidden ${size} md:-right-6 top-12 px-2 transition-opacity duration-300 ${clic ? 'block' : 'hidden '}`}
      >
        {/* ajustes para ingreso y eliminacion de tesis */}
        <Link
          href="/settings"
          className="flex w-full cursor-pointer select-none items-center gap-2 hover:text-zinc-600 rounded-md pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <IoSettingsOutline className="h-6 w-6" />
          <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
            Ajustes
          </p>
        </Link>
          
          {/* cerrar sesion */}
        <hr className="my-2 border-blue-gray-50 "/>
        <button
          onClick={ onLogout }
          className="flex w-full cursor-pointer hover:text-zinc-600 select-none items-center gap-2 rounded-md pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <MdPowerSettingsNew className="h-6 w-6" />
          <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
            Cerrar Sesion
          </p>
        </button>
      </ul>
    </>
  )
}
