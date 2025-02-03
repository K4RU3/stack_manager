import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.MODE = "development"
    ? import.meta.env.VITE_API_BASE_URL
    : "https://stackmanager.rikka-space.com"
})

const getCurrentData = () => {
    return API.get("/api/static_data");
}

const getStaticData = () => {
    return API.get("/api/current_data");
}

export { getCurrentData, getStaticData }