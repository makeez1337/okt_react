import {axiosService} from "./axios.service";

import {urls} from "../configs";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(res => res.data),
    create: (car) => axiosService.post(urls.cars, car).then(res => res.data),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`),
    update: (id,car) => axiosService.patch(urls.cars + '/' + id,car).then(value => value.data)
}