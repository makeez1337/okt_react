import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";


export const characterService = {
    getByEpisodeArr: (arr) => axiosService.get(`${urls.character}/${arr}`).then(res => res.data)
}