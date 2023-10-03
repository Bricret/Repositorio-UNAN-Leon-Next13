const lookA = 'px-2 md:text-lg text-sm md:opacity-40 md:hover:text-[#000000] md:hover:opacity-70';
const lookLi = 'mx-6 md:my-4 my-6 py-1 md:my-0 duration-500 hover:bg-[#C0C0C0] rounded-lg md:flex md:items-center';

export const items = [
    {
        title: 'Menu Principal',
        link: '/',
        StyleA: lookA,
        StyleLi: lookLi,
    },
    {
        title:'Aulas virtuales',
        link: 'https://avirtual.unanleon.edu.ni/',
        StyleA: lookA,
        StyleLi: lookLi,
    },
    {
        title:'Contactanos',
        link: 'mailto:web@di.unanleon.edu.ni',
        StyleA: lookA,
        StyleLi: lookLi,    
    },

];

export const originalID = {
    line1: 'line1__bars-menu',
    line2: 'line2__bars-menu',
    line3: 'line3__bars-menu',
 };

export const newID = {
    line1: 'activeline1__bars-menu',
    line2: 'activeline2__bars-menu',
    line3: 'activeline3__bars-menu',
}; 