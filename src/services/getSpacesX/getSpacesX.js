
const getSpacesX = () => {
    return fetch('https://api.spacexdata.com/v3/launches/')
        .then(res => res.json());
}


export {getSpacesX};