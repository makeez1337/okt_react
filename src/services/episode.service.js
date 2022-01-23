import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


export const episodeService = {
    getByPage: (value) => axiosService.get(`${urls.episodes}/?page=${value}`).then(res => res.data)
}