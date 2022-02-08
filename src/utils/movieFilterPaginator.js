export const movieFilterPaginator = (pageIdNumber, paginationArr, totalFilteredPages) => {
    if (totalFilteredPages > 6) {
        if (pageIdNumber < 13) {
            for (let i = 1; i <= 13; i++) {
                paginationArr.push(i);
            }
        } else if (pageIdNumber >= 13 && pageIdNumber <= totalFilteredPages - 6) {
            for (let i = pageIdNumber - 6; i <= pageIdNumber + 6; i++) {
                paginationArr.push(i);
            }
        } else if (pageIdNumber > totalFilteredPages - 12) {
            for (let i = pageIdNumber-12; i <= +totalFilteredPages; i++) {
                paginationArr.push(i);
            }
        }

    }else {
        for (let i = 1; i <= totalFilteredPages; i++) {
            paginationArr.push(i);
        }
    }
}