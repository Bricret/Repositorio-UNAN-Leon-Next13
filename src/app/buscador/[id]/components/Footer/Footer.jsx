import Link from "next/link"


export const Footer = () => {
  return (
        <footer className="flex items-center justify-between px-6 py-4 border-t border-zinc-200 dark:border-zinc-700">
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
  )
}
