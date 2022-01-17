import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: axiosService.get(urls.posts).then(res => res.data),
    getById: axiosService.get(urls.posts).then(res => res.data)
}