import Image from 'next/image';
import PropTypes from 'prop-types';

export const Card = ({ image, description, title, link }) => {


  return (
        <>
            <div className=" max-w-sm md:h-[680px] bg-white rounded-lg shadow my-6 border-[1px] border-[#dbdbdb] flex flex-col justify-between cursor-default">
                <div className="w-full flex flex-col justify-start">
                    <Image 
                    className="rounded-t-lg w-full" 
                    src={ image } 
                    alt="Logo-Unanleon"
                    />
                    <span className='p-5 w-full '>
                        <h5 className="mb-2 py-2 text-2xl font-bold tracking-tight text-zinc-600 ">{ title }</h5>
                        <p className="mb-3 font-normal text-gray-700 py-2">{ description }</p>
                    </span>
                </div>
                <a className="inline-flex items-center px-2  py-2 text-sm mb-3 mx-3 w-24 font-medium text-center text-white bg-secondary-color rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" href={ link }>
                ver mas
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
        </>
    )



}

Card.propTypes = {
    image : PropTypes.any,
    title : PropTypes.string,
    description : PropTypes.string,
    link : PropTypes.string,
}