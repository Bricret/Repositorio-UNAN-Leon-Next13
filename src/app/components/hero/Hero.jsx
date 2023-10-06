import heroe from "../../../../public/img/hero.webp";
import { Search } from './Search'

export const Hero = () => {
    

  return (
    <>
        <div className=" md:h-screen h-96 grid text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroe.src})` }}>
            <div className="col-start-1 row-start-1 bg-gray-950 bg-opacity-80 w-full h-full"></div>
            <div className="col-start-1 row-start-1 mx-auto my-auto">
                <p className=" text-white font-poppins md:text-6xl text-3xl  font-bold mb-16 cursor-default" >¿Qué estas buscando?</p>

                <Search type={ true }/>

                <p className="font-poppins mt-12 text-[#BBB] md:text-[17px] text-[10px] cursor-default">Aquí encontraras todas las Tesis y exámenes de grado realizados por los estudiantes egresados de la UNAN-LEON </p>
            </div>
        </div> 
    </>
    )
}
