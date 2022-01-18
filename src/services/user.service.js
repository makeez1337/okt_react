import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(res => res.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(res => res.data)
}