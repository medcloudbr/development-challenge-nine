
import { useEffect } from 'react';
import fetch from '../utils/api/fetch';

export default function Form() {

    useEffect(() => {
        async function getPatients() {
            const response = await fetch.get('/patients');
            console.log(response);
            return response.data;
        }
        getPatients();
    }, []);

    return (
        <form >
            Teste
        </form>
    );
}
