const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json());
}

export {getComments};