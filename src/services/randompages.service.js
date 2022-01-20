import {axiosService} from "./axios.service";
import baseURL from "../configs/urls";


export const randompagesService = {
    getPhoto: (val) => axiosService.get(baseURL + val).then(res => res.request.responseURL)
}

