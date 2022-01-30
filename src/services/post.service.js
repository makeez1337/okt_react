import {axiosPostService} from "./axios.service";
import {urls} from "../configs";


export const postService = {
    getAll: () => axiosPostService.get(urls.posts).then(res => res.data)
}