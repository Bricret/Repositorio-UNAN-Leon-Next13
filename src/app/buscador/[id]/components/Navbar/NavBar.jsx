'use client'
import { ButtonLogin } from "@/app/components/headers/ButtonLogin"
import { Search } from "@/app/components/hero/Search"
import { LogoType } from "@/app/components/logo/LogoType"
import { UserAccount } from "@/app/components/user/UserAccount"
import { useEffect, useState } from "react"
import { supabase } from '@/lib/client';


export const NavBar = ({ searchWord }) => {

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
    <nav className="flex items-center justify-between px-6 py-1 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center space-x-4">
            <LogoType type={false}/>
        </div>
        <Search type={ false }/>

        <div className={login ? 'hidden' : 'block'}>
                    <ButtonLogin />
                </div>

                <div className={`relative ${ login ? 'block' : 'hidden'  }`}>
                    <UserAccount />
                </div>

    </nav>
  )
}
