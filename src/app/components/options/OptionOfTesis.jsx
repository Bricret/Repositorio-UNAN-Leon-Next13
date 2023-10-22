import Link from "next/link"

export const OptionOfTesis = () => {
  return (
    <section className="w-40 border-r border-r-zinc-300 dark:border-r-zinc-400 overflow-y-hidden">
        <article className="flex flex-col pl-3 items-center pt-4 flex-wrap gap-8 text-gray-700 ">
            {/* link que te lleva a ingresar tesis */}
              <Link href="/opciones" className=" hover:bg-blue-gray-600 hover:opacity-60 px-4 py-2 border-2 rounded-lg  hover:scale-105 duration-200 ease-in-out hover:text-slate-600">
                Ingresar
              </Link>
            {/* link para editar y borrar tesis */}
            <Link href="/opciones/edit" className=" hover:bg-blue-gray-600 hover:opacity-60 px-4 py-2 border-2 rounded-lg  hover:scale-105 duration-200 ease-in-out hover:text-slate-600">
              Editar/Borrar
            </Link>
        </article>
    </section>  
  )
}
