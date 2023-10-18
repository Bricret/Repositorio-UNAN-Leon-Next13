import Image from "next/image"
import backImage from "../../../../public/img/edificioUNAN.webp"

export const MidSite = () => {
  return (
    <section>
        <Image
            src={backImage}
            alt="edificio UNAN"
            className=" md:h-screen h-96 grid text-center bg-cover bg-center layout-center bg-no-repeat"
        />
        
        <article className='md:px-16 px-12 md:py-40 py-14 md:w-3/4'>
            <h1 className=' md:text-5xl text-3xl font-extrabold font-poppins text-[#2E2D29CC] pb-11'>Accesibilidad web</h1>
            <p className='font-light font-roboto md:text-xl  text-[#999]'>La Universidad se compromete a proporcionar un entorno en línea que sea accesible para todos, 
            incluidas las personas con discapacidades.</p>
        </article>
    </section>
    )
}
    