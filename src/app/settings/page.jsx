'use state';

import { TesisForm } from "./TesisForm";


export default function setPage () {

    return (
        <div className="flex flex-1 overflow-hidden">
            <TesisForm />
        </div>
    )
}