'use client'
import { ButtonLogin } from "@/app/components/headers/ButtonLogin"
import { Search } from "@/app/components/hero/Search"
import { LogoType } from "@/app/components/logo/LogoType"
import { UserAccount } from "@/app/components/user/UserAccount"
import { useEffect, useState } from "react"
import { supabase } from '@/lib/client';


export const NavBar = () => {

    const [login, setLogin] = useState(false);

    useEffect(() => {
      supabase.auth.onAuthStateChange((event, session) => {
        if (session){
          setLogin(true)
        } else {
          setLogin(false)
        }
    })
    }, [ ])


  return (
  <nav className="flex items-center justify-between px-6 py-1 border-b border-gray-700 ">
      <div className="md:flex md:items-center space-x-4 hidden">
          <LogoType type={false}/>
      </div>
      <aside className="flex flex-grow items-center justify-center gap-4 my-4 md:my-0">
        <div>
          <Search type={ false }/>
        </div>

      </aside>
          <div className={ login ? 'hidden' : 'md:block hidden lg:w-[8rem] w-20 md:bg-red-400 md:hover:bg-red-600 bg-transparent  text-white font-bold px-3  py-2 lg:rounded-full rounded-2xl' }>
            <ButtonLogin />
          </div>
          <div className={`relative ${ login ? 'block' : 'hidden' }`}>
              <UserAccount />
          </div>
  </nav>
  )
}
