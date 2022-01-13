import {urls} from '../configs/urls'

const getAll = () => {
    return fetch(urls.posts)
        .then(res => res.json());
}

const getById = (id) => {
    return fetch(urls.posts + '/' + id)
        .then(res => res.json());
}

export const postService = {
    getAll, getById,
}