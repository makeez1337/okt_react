import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getByUserId: (userId) => axiosService.get(`${urls.albums}?userId=${userId}`).then(res => res.data)
}