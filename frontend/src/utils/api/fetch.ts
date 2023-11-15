import axios from "axios";


const HOST = 'http://localhost:3001';
const protocol = 'http';

// type Method = 'GET' | 'PUT' | 'POST' | 'DELETE';

const fetch = axios.create({
    baseURL: `${protocol}://${HOST}/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
 
// const patientApi = async (method:Method, endpoint:string, body: object) => {
//     fetch.request({method: method, url:endpoint, data:body})
//     .then(({status, data}) => ({status, data}))
// }



export default fetch;