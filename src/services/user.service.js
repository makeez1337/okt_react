import {axiosUserService} from "./axios.service";
import {urls} from "../configs";

export const userService = {
    getAll: () => axiosUserService.get(urls.users).then(res => res.data)
}