import Link from "next/link";
import { LogoType } from "../../components/logo/LogoType";
import { InfoCards } from "./components/InfoCards";

export default function dashPage ({params}) {
    const { id } = params;
    const decodedId = decodeURIComponent(id);
    const searchWord = decodedId.replace(/-/g, ' ');


    return (
        <div className="flex flex-col h-screen w-screen bg-white dark:bg-zinc-900">
            <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">

                <div className="flex items-center space-x-4">
                <LogoType type={false}/>
                </div>
                <p className="bg-white">{searchWord}</p>
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
            <div className="flex flex-1 overflow-hidden">
                <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 overflow-auto">
                <nav className="flex flex-col gap-4 p-4">
                    <h2 className="text-lg font-semibold text-zinc-500 text-center dark:text-zinc-400">Escoja un filtro</h2>
                    <div className="space-y-4">
                        <p className="bg-red-600">Aqui va las barras de filtros</p>
                    </div>
                </nav>
                </aside>
                <InfoCards  title={decodedId} />
            </div>
            <footer className="flex items-center justify-between px-6 py-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">© 2023 UNAN-Leon</p>
                <nav className="flex items-center space-x-4">
                <Link className="text-sm text-zinc-500 dark:text-zinc-400" href="#">
                    Terms
                </Link>
                <Link className="text-sm text-zinc-500 dark:text-zinc-400" href="#">
                    Privacy
                </Link>
                </nav>
            </footer>
        </div>
    )
}