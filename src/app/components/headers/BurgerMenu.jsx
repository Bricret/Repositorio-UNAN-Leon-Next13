import './style.css';   

export const BurgerMenu = ({ onPick, first }) => {


  return (
    <>
        
        <div id='bars__menu' onClick={ () => onPick() } className='mx-6 my-9 md:hidden cursor-pointer'>   
            <span id={first.line1} className='block w-6 h-[5px] m-1 bg-black  rounded' ></span>
            <span id={first.line2} className='block w-6 h-[5px] m-1 bg-black mt-1 rounded' ></span>
            <span id={first.line3} className='block w-6 h-[5px] m-1 bg-black mt-1 rounded ' ></span>
        </div>
    </>
  )
}