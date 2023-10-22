
import { UpdateForm } from "./UpdateForm"

export default function updatePage ({params}) {

    const { idTesis } = params;
    const decodedIdTesis = decodeURIComponent(idTesis);

    return (
        <UpdateForm Id={ decodedIdTesis } />
    )
}