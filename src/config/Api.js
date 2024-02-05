import axios from "axios";

// const BASE_URL = 'https://65b925f2b71048505a8a4b00.mockapi.io'
const API = axios.create({
    baseURL: `http://localhost:8080/api/v1/`
})

export default API;

