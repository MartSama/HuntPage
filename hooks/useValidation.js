import React, { useEffect, useState } from 'react'


const useValidation = (initialState, validation, fn) => {
    const [values, useValues] = useState(initialState);
    const [errors, useErrors] = useState();
    const [submitForm, useSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                fn();
            }
            useSubmitForm(false);
        }
    }, [])

    const handleChange = (e) => {
        useValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsValidation = validation(values);
        useErrors(errorsValidation);
        useSubmitForm(true);
    }

    return {
        values, errors, submitForm, handleSubmit, handleChange
    }
}

export default useValidation