

export const AlertForTesis = ({ text, title, accion, color='bg-green-500' }) => {

  return (
    <>
      <div>
        <label htmlFor="tw-modal" className={`cursor-pointer rounded ${color} px-6 py-2 text-white active:bg-slate-400`}>{accion}</label>
        <input type="checkbox" className="peer fixed appearance-none opacity-0" id="tw-modal" />
        <label htmlFor="tw-modal" className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
          <label htmlFor="" className="max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black shadow-2xl transition">
            <h3 className="text-lg font-bold">{ title }</h3>
            <p className="py-4">{ text }</p>
            <button>
              <label htmlFor="tw-modal" className="cursor-pointer rounded bg-blue-500 px-6 py-2 text-white active:bg-slate-400">Aceptar</label>
            </button>
          </label>
        </label>
      </div>
    </>
  )
}
