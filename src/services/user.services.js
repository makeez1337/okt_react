import {urls} from "../configs/urls";


const getAll = () => {
    return fetch(urls.users)
        .then(res => res.json());
}

export const userServices = {
    getAll
}