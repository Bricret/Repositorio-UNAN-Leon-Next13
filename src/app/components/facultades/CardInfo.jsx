'use client';
import Image from 'next/image';
import Link from 'next/link';

export const CardInfo = ({ image, description, title, link }) => {

  return (
  <>
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96  rounded-xl bg-clip-border transition-all duration-300 ease-in-out transform hover:scale-105 gap-4 mx-4 md:mx-0">
  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <Image
      src={image}
      alt="Card Image"
      className="rounded-xl bg-clip-border shadow-blue-gray-500/40 object-cover object-center w-full h-full"
    />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-2xl antialiased font-bold  leading-snug tracking-normal text-slate-700">
      {title}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      {description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link 
      href={link} 
      className="select-none rounded-lg bg-slate-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-slate-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      Ver mas
    </Link>
  </div>
</div>
  </>
)
}
