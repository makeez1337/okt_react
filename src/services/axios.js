import axios from "axios";

import {urls} from "../configs/urls";

export const getAllUsers = () => {
    return axios.get(urls.users)
        .then(res => res.data);
}