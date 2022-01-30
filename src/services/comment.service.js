import {axiosCommentService} from "./axios.service";
import {urls} from "../configs";


export const commentService = {
    getAll: () => axiosCommentService.get(urls.comments).then(res => res.data)
}