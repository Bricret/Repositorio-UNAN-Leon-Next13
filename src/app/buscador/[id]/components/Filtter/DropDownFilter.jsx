'use client';
import filtros from "@/app/data/filtros";

export const DropDownFilter = ({ onFilterSelect }) => {



  const handleFilterSelect = (filterType, filterValue) => {
    onFilterSelect({ filterType, filterValue });
  };


  return (
<main className="w-64 border-r border-zinc-500 dark:border-zinc-700 overflow-auto">
  <nav className="flex flex-col gap-6 ">
    <h2 className="text-lg font-semibold text-zinc-500 text-center dark:text-zinc-500 pt-4">
      Escoja un filtro
    </h2>
    <div className="space-y-6">
      {filtros.map((filtro) => (
        <div className="relative " key={filtro.id}>
          <h1 className="text-zinc-500 text-lg font-semibold ml-4">{filtro.title}</h1>
          <div className="relative rounded-lg p-4 w-full mt-1">
            {filtro.tipos.map((tipo) => (
              <div
                key={tipo}
                className={`w-full justify-start p-2 cursor-pointer rounded-lg focus:bg-zinc-500`}
                onClick={() => handleFilterSelect(filtro.title.toLocaleLowerCase(), tipo.toLocaleLowerCase())} 
              >
                <h3 className="flex font-bold font-roboto text-[#BBBBBB] hover:text-[#EDEDED] transition-colors duration-200">
                  {tipo}
                </h3>
              </div>
            ))}
          </div>
          <div className="block border-b border-zinc-500"></div>
        </div>
      ))}
    </div>
  </nav>
</main>
  );
};