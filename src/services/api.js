import axios from "axios";

// 05820205/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;