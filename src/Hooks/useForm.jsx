import React from 'react';
import useFetch from './useFetch';
import { GET_CEP } from '../APICEP';

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido, idiota!'
    }
}

const useForm = (type) => {
    const [rua, setRua] = React.useState('')
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if (value.length === 0) {
            setError("Preencha um valor.")
            return false
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false
        } else {
            setError(null)
            return true
        }
    }

    const { data, request } = useFetch()

    async function getCep({ value, rua }) {
        const { url, option } = GET_CEP({ cep: cep.value })
        const { response, json } = await request(url, option)
        console.log(data)


    }

    function onChange({ target }) {
        if (error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm