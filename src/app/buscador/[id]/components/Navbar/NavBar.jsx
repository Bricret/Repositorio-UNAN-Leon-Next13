import { ButtonLogin } from "@/app/components/headers/ButtonLogin"
import { Search } from "@/app/components/hero/Search"
import { LogoType } from "@/app/components/logo/LogoType"


export const NavBar = ({ searchWord }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-1 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center space-x-4">
            <LogoType type={false}/>
        </div>
        <Search type={ false }/>
        <div className="flex items-center space-x-4">
          <ButtonLogin />
        </div>
    </nav>
  )
}
