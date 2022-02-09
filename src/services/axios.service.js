import axios from "axios";
import baseURL from "../constants/urls";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGY4MDNlMjBkYTVkZDA4NDdjNzViODMyMzZhMTBiZCIsInN1YiI6IjYxZmU0NGMxZDA1MWQ5MDExNmQ4MjNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CUQMAQTm50w3HnIKW_dv5oO8ctI3lOyyGyV7lucIDeg'

const config = {'Authorization': `Bearer ${token}`};

export const axiosService = axios.create({
    baseURL,
    headers: config
});
