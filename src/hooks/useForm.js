'use client'

import { useState } from "react";

export const UseForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onRestart = () => {
        setFormState(initialForm)

    }


    return {
        ...formState,
        formState,
        onInputChange,
        onRestart,
    }
}
