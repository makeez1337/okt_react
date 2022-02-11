export const moviePaginator = (currentPage, paginationArr, totalPages) => {
    if (currentPage < 13) {
        for (let i = 1; i <= 13; i++) {
            paginationArr.push(i);
        }
    } else if (currentPage >= 13 && currentPage <= totalPages-6) {
        for (let i = currentPage - 6; i <= currentPage + 6; i++) {
            paginationArr.push(i);
        }
    } else if (currentPage > totalPages-6) {
        for (let i = 488; i <= +totalPages; i++) {
            paginationArr.push(i);
        }
    }
}