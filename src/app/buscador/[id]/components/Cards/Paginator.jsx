
export const Paginator = ({ setPage, data, page, allPage }) => {
  return (
    <div className={`flex justify-between items-center border-2 border-solid border-primary-color mt-3 text-white py-2 px-4 ${data.length === 0 ? "hidden" : ''}`}>
    <button 
      onClick={() => setPage(page - 1)} 
      disabled={page === 0}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${page === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      Anterior
    </button>
    <span>Página {page + 1}</span>
    <button 
      onClick={() => setPage(page + 1)}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${data.length < allPage ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={data.length < allPage}
    >
      Siguiente
    </button>
  </div>
  )
}


// import { Button, IconButton } from "@material-tailwind/react";
// import {FaArrowRight, FaArrowLeft } from "react-icons/fa";


// export const Paginator = ({ setPage, data, page, allPage }) => {

//   const getItemProps = (index) =>
//     ({
//       variant: page === index ? "filled" : "text",
//       color: "gray",
//       onClick: () => setPage(index),
//     });
//     const next = () => {
//       if (page === 5) return;
//       setPage(page + 1);
//     };
   
//     const prev = () => {
//       if (page === 1) return;
//       setPage(page - 1);
//     };

//   return (
//       <div className="flex items-center gap-4">
//       <Button
//         variant="text"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={prev}
//         disabled={page === 1}
//       >
//         <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
//       </Button>
//       <div className="flex items-center gap-2">
//         <IconButton {...getItemProps(1)}>1</IconButton>
//         <IconButton {...getItemProps(2)}>2</IconButton>
//         <IconButton {...getItemProps(3)}>3</IconButton>
//         <IconButton {...getItemProps(4)}>4</IconButton>
//         <IconButton {...getItemProps(5)}>5</IconButton>
//       </div>
//       <Button
//         variant="text"
//         className="flex items-center gap-2"
//         onClick={next}
//         disabled={page === 5}
//       >
//         Next
//         <FaArrowRight strokeWidth={2} className="h-4 w-4" />
//       </Button>
//     </div>
//   );
// }
