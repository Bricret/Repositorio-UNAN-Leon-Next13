import { Image } from "next/dist/client/image-component";
import logo from "../../../../../../public/img/edificioUNAN.webp";
import { BsDownload } from "react-icons/bs";
import { HandleViewById } from "../../helpers/HandleViewById";

export default async function viewPage ({ params }) {

    const { tesis } = params;

    const { data } = await HandleViewById (tesis);
    

    return (
    <main className={`flex-1 overflow-auto px-4 pt-4  ${ data.length === 0 ? 'hidden' : '' }`}>
        <section className="grid mb-4">
            <article className="md:gap-10 rounded-lg bg-gray-800 md:flex md:flex-row flex flex-col md:pt-8 md:pb-6 md:pr-6 px-4 py-6">
                <Image 
                    src={logo} 
                    alt="logo"
                    className="rounded-lg md:ml-6 mb-4  md:w-96 md:h-96 w-full h-60 object-cover brightness-75 shadow-lg hover:shadow-xl transition duration-200 ease-in-out" 
                    priority={true}
                />
            {
                data.map((tesis) => (
                    <div className="flex flex-col gap-y-3 " key={ tesis.id }>
                        <h1 className="border-b border-dashed border-gray-400 text-xl text-white font-roboto">{ tesis.titulo }</h1>
                        <p className="text-white font-bold font-roboto text-lg ">Autores/as: <span className="text-gray-400 font-light text-lg">{ tesis.autor }</span></p>
                        <p className="text-white font-bold font-roboto text-lg">Carrera: <span className="text-gray-400 font-light text-lg">{ tesis.carrera }</span></p>
                        <p className="text-white font-bold font-roboto text-lg">Fecha: <span className="text-gray-400 font-light text-lg">{ tesis.fecha }</span></p>
                        <p className="text-white font-bold font-roboto text-lg ">Palabras_Clave: <span className="text-gray-400 font-light text-lg">{ tesis.palabras_clave }</span></p>
                        <p className="text-white font-bold font-roboto text-lg ">Tipo de Tesis: <span className="text-gray-400 font-light text-lg">{ tesis.tipos_de_tesis }</span></p>
                        <p className="text-white font-bold font-roboto text-lg">Peso: <span className="text-gray-400 font-light text-lg">{ tesis.peso }</span></p>
                        <a
                            href={tesis.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="middle none center mr-4 rounded-lg bg-primary-color py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-40 mt-3 flex flex-row items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-color duration-300"
                            >
                            Descargar <BsDownload className="pl-3 w-7 h-7"/> 
                        </a>
                    </div>
            ))}
            </article> 
            </section>
            <iframe 
                src={ data[0]?.link }
                width="100%"
                height="100%"
                allowFullScreen
                title="pdf"
            />
    </main>
    
)
}