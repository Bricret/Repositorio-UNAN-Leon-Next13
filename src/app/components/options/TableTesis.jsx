import { AlertForTesis } from "./AlertForTesis";
import Link from "next/link";

export const TableTesis = ({ tesis, handleDeleteTesis }) => {
  return (
    <table className={`stripe hover w-full py-4 max-w-max text-sm border-separate shadow-lg rounded-lg my-2 ${tesis.length === 0 && 'hidden'}`}>
        <thead className="bg-secondary-color opacity-80 text-white text-center">
            <tr>
                <th className="border border-slate-500 ">id</th>
                <th className="border border-slate-500">autor</th>
                <th className="border border-slate-500">carrera</th>
                <th className="border border-slate-500">fecha</th>
                <th className="border border-slate-500 ">palabras_clave</th>
                <th className="border border-slate-500">peso</th>
                <th className="border border-slate-500">tipo_de_tesis</th>
                <th className="border border-slate-500">titulo</th>
                <th className="border border-slate-500">link</th>
                <th className="border border-slate-500 ">Ajustes</th> 
            </tr>
        </thead>
        <tbody className="text-start ">
        { tesis.sort((a, b) => a.id - b.id).map((tesis) => (
            <tr key={tesis.id}>
                <td className="border border-slate-700 text-center">{tesis.id}</td>
                <td className="border border-slate-700 max-w-[20rem] overflow-auto whitespace-normal">{tesis.autor}</td>
                <td className="border border-slate-700 text-center">{tesis.carrera}</td>
                <td className="border border-slate-700 text-center">{tesis.fecha}</td>
                <td className="border border-slate-700 max-w-[20rem] overflow-auto whitespace-normal">{tesis.palabras_clave}</td>
                <td className="border border-slate-700 text-center">{tesis.peso}</td>
                <td className="border border-slate-700 text-center">{tesis.tipos_de_tesis}</td>
                <td className="border border-slate-700 max-w-[20rem] overflow-auto whitespace-normal">{tesis.titulo}</td>
                <td className="border border-slate-700  max-w-[10rem] overflow-auto whitespace-normal">{tesis.link}</td>
                <td className="border border-slate-700 max-w-[20rem]">
                    <div className="flex flex-col items-center">
                        <Link href={`/settings/edit/${tesis.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mb-4 rounded-md">
                            Editar
                        </Link>
                        <div onClick={() => handleDeleteTesis(tesis.id)}>
                            <AlertForTesis type={'Eliminar'} text={'La tesis se ha eliminado correctamente en la base de datos!'} title={'Tesis Eliminada'} color={'red'}/>
                        </div>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
  )
}
