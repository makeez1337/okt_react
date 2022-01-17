import {axiosService} from "./axios.service";

export const usersService = {
    getAll: axiosService().then(res => res.data),
    getById: axiosService(id).then(res => res.data)
}