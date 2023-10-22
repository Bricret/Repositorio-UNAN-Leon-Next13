'use client';

import { CardInfo } from "./CardInfo"
import info from "./datos"


export const Cards = () => {
  return (
        <>
            <div className=" md:px-16 px-7 sm:py-14 py-11 md:text-4xl text-3xl font-extrabold font-poppins text-[#2E2D29CC] cursor-default bg-gray-200">
                <h1 className="text-center">Carreras De la facultad Ciencias y Tecnologia</h1>
            </div>
            <section className=" flex justify-center flex-wrap md:gap-20 lg:gap-28 gap-16 pb-16 md:pl-0 py-8  bg-gray-200">
            {
                info.map(( { title, description, image, link } , index ) => (
                    <CardInfo key={ index } title={ title } description={ description } image={ image }  link={  link }/>
                ))
            }

            </section>
        </>
    )
}
