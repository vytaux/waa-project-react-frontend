import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';

const API = axios.create({
    baseURL: `${baseURL}/api/v1`
});

export default API;