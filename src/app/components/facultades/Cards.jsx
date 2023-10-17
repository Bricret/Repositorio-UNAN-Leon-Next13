import { CardInfo } from "./Card"
import info from "./datos"


export const Cards = () => {
  return (
        <>
            <div className=" md:px-16 px-7 sm:py-14 py-11 md:text-4xl text-3xl font-extrabold font-poppins text-[#2E2D29CC] cursor-default bg-gray-100">
                <p className="text-center">Carreras De la facultad Ciencias y Tecnologia</p>
            </div>
            <div className=" flex items-start md:justify-center flex-wrap md:gap-18 gap-10 pb-16 pl-4 md:pl-0 bg-gray-100">
            {
                info.map(( { title, description, image, link } , index ) => (
                    <CardInfo key={ index } title={ title } description={ description } image={ image }  link={  link }/>
                ))
            }

            </div>
        </>
    )
}
