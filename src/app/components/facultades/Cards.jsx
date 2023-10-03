import { Card } from "./Card"
import info from "./datos"


export const Cards = () => {
  return (
        <>
            <div className=" md:px-16 px-7 sm:py-14 py-11 md:text-4xl text-3xl font-extrabold font-poppins text-[#2E2D29CC] cursor-default">
                <p>Facultades</p>
            </div>
            <div className=" flex items-start md:justify-center flex-wrap md:gap-18 gap-10 mb-16 mx-7 ">
            {
                info.map(( { title, description, image, link } , index ) => (
                    <Card key={ index } title={ title } description={ description } image={ image }  link={  link }/>
                ))
            }

            </div>
        </>
    )
}
