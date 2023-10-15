import Link from "next/link"

export const OptionOfTesis = () => {
  return (
    <main className="w-40 border-r border-r-zinc-300 dark:border-r-zinc-400 overflow-auto">
        <nav className="flex flex-col gap-6 pl-3 pt-4">
            {/* link que te lleva a ingresar tesis */}
            <Link href="/settings" className="flex items-center gap-2 text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
              Ingresar
            </Link>
            {/* link para editar y borrar tesis */}
            <Link href="/settings/edit" className="flex items-center gap-2 text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
              Editar/Borrar
            </Link>

        </nav>
    </main>
  )
}
