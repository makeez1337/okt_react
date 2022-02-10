import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const movieService = {
    getByPage: (page) => axiosService.get(urls.discover + urls.movie + '?page=' + page).then(res => res.data),
    getGenres: () => axiosService.get(urls.genres).then(res => res.data),
    getByGenre: (genres, page) => axiosService.get(urls.discover + urls.movie + `?with_genres=${genres}&page=${page}`).then(res => res.data),
    getVideoById: (id) => axiosService.get(urls.movie + `/${id}/videos`).then(res => res.data)
}