import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getByAlbumId: (albumId) => axiosService.get(`${urls.photos}?albumId=${albumId}`).then(res => res.data)
}