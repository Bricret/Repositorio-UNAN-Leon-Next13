
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
