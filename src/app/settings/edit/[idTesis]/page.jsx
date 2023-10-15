
import { UpdateForm } from "./UpdateForm"

export default function updatePage ({params}) {

    const { idTesis } = params;
    const decodedId = decodeURIComponent(idTesis);

    return (
        <UpdateForm Id={ decodedId } />
    )
}