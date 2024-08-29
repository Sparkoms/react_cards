import axios from "axios";

export function getData() {
    return axios.get("https://www.omdbapi.com/?s=man&apikey=bc01350a");
};