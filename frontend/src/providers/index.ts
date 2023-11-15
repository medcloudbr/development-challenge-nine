import axios from "axios";

const HOST = 'localhost:3001';
const protocol = 'http';

export const Api = axios.create({
    baseURL: `${protocol}://${HOST}/`,
});