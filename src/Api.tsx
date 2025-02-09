import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5678"
    : window.location.origin
})

const fetchData = () => {
    return API.get("/api/current_data");
}

const getData = async () => {
    return (await fetchData()).data;
}

export { getData };