import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



export const Paginator = ({ setPage, data, page, allPage }) => {

  const comparePage = data.length < allPage;

  return (
    <div className={`flex justify-between items-center mt-3 text-white py-2 px-4 ${data.length === 0 ? "hidden" : ''}`}>
    <button 
      onClick={() => setPage(page - 1)} 
      disabled={page === 0}
      className={`border-2 border-gray-400 text-white font-bold py-2 px-2 rounded-full ${page === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <FaArrowLeft strokeWidth={2} className="h-6 w-6" />
    </button>
    <strong className="text-gray-600 flex flex-row"><span className="md:block hidden pr-2">Página</span> {page + 1}</strong>
    <button 
      onClick={() => setPage(page + 1)}
      className={`border-2 border-gray-400 text-white font-bold py-2 px-2 rounded-full ${comparePage ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={comparePage}
    >
      <FaArrowRight strokeWidth={2} className="h-6 w-6" />
    </button>
  </div>
  )
}