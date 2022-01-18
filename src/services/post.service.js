import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(res => res.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(res => res.data),
    getByUserId: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`).then(res => res.data),
    getCommentsById: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(res => res.data)
}