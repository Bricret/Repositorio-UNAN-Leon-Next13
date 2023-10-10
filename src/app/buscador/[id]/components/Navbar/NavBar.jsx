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
        <button size="icon" variant="ghost">
            <svg
            className=" h-5 w-5 text-zinc-500 dark:text-zinc-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <span className="sr-only">Toggle dark mode</span>
        </button>
        <button size="icon" variant="ghost">
            <svg
            className=" h-5 w-5 text-zinc-500 dark:text-zinc-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="sr-only">View notifications</span>
        </button>
        </div>
    </nav>
  )
}
