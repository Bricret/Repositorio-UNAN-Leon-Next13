import Image from "next/image";
import logo from "../../../../public/img/logo-UNAN.webp"

export const LogoType = (Props) => {

  const color1 = ['#AB030C', '#192D76', '#605656'];
  const color2 = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];

  const color = Props.type ? color1 : color2;
 
  return (
    <>
        <div className='flex items-center cursor-pointer'>
          <Image 
            src={logo} 
            alt="Logo-Unanleon"
            height={100}
            className='mt-3 inline'/>
          <p className='font-roboto pl-2 bg-clip-text py-2 '>
            <span className=' text-base md:text-3xl font-[700]' style={{ "color": color[0] }}>UNAN </span> <span className='text-base md:text-3xl font-[700] ' style={{ "color": color[2] }}> - </span>
            <span className=' text-base md:text-3xl font-[700]' style={{ "color": color[1] }}>LEON </span> <span className='text-xl md:text-4xl font-[800]' style={{ "color": color[2] }}> | </span>
            <span className=' text-xs md:text-xl font-[400]' style={{ "color": color[2] }}> REPOSITORIO </span>
          </p>
        </div>
    </>
  )
}
