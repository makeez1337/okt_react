export const movieFilterPaginator = (currentPage, paginationArr, totalFilteredPages) => {
    if (totalFilteredPages < 13) {
        for (let i = 1; i <= totalFilteredPages; i++) {
            paginationArr.push(i);
        }
    } else if (totalFilteredPages > 12 && currentPage < 12) {
        for (let i = 1; i <= 13; i++) {
            paginationArr.push(i);
        }
    } else if (currentPage <= totalFilteredPages - 12) {
        for (let i = currentPage - 6; i <= currentPage + 6; i++) {
            paginationArr.push(i);
        }
    } else if (currentPage > totalFilteredPages - 13) {
        for (let i = totalFilteredPages - 12; i <= totalFilteredPages; i++) {
            paginationArr.push(i);
        }
    }
}
