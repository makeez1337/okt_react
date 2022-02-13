export const getGenreNames = (genres,genre_ids,genresNamesArr) => {
    genres.forEach(genre => {
        genre_ids.forEach(elem => {
            if (elem === genre.id) {
                genresNamesArr.push(genre.name);
            }
        })
    })
}
