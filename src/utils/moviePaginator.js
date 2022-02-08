export const moviePaginator = (pageIdNumber, paginationArr, totalPages) => {
    if (pageIdNumber < 13) {
        for (let i = 1; i <= 13; i++) {
            paginationArr.push(i);
        }
    } else if (pageIdNumber >= 13 && pageIdNumber <= totalPages-6) {
        for (let i = pageIdNumber - 6; i <= pageIdNumber + 6; i++) {
            paginationArr.push(i);
        }
    } else if (pageIdNumber > totalPages-6) {
        for (let i = 488; i <= +totalPages; i++) {
            paginationArr.push(i);
        }
    }
}