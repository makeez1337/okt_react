import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const usersService = {
    getAll: axiosService.get(urls.users).then(res => res.data),
    getById: axiosService.get(urls.users).then(res => res.data)
}