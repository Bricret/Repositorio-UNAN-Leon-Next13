'use client';
import filtros from "@/app/data/filtros";

export const DropDownFilter = ({ onFilterSelect }) => {



  const handleFilterSelect = (filterType, filterValue) => {
    onFilterSelect({ filterType, filterValue });
  };


  return (
    <nav className="md:w-60 w-40 border-r border-gray-700 overflow-auto flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center text-primary-color pt-4">
          Escoja un filtro
        </h1>
        <aside className="space-y-6">
          {filtros.map((filtro) => (
            <section className="relative " key={filtro.id}>
              <h2 className="text-secondary-color text-lg font-semibold ml-4">{filtro.title}</h2>
              <div className="relative rounded-lg p-4 w-full mt-1">
                {filtro.tipos.map((tipo) => (
                  <article
                    key={tipo}
                    className={`w-full justify-start p-2 cursor-pointer rounded-lg focus:bg-zinc-500`}
                    onClick={() => handleFilterSelect(filtro.title.toLocaleLowerCase(), tipo.toLocaleLowerCase())} 
                  >
                    <h3 className="flex font-bold font-roboto text-[#BBBBBB] hover:text-[#EDEDED] transition-colors duration-200">
                      {tipo}
                    </h3>
                  </article>
                ))}
              </div>
              <hr className="block border-b border-gray-600"></hr>
            </section>
          ))}
        </aside>
    </nav>
  );
};