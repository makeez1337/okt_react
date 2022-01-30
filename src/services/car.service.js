import {axiosCarService} from "./axios.service";

import {urls} from "../configs";

export const carService = {
    getAll: () => axiosCarService.get(urls.cars).then(res => res.data),
    create: (car) => axiosCarService.post(urls.cars, car).then(res => res.data),
    delete: (id) => axiosCarService.delete(`${urls.cars}/${id}`),
    update: (id,car) => axiosCarService.patch(urls.cars + '/' + id,car).then(value => value.data)
}