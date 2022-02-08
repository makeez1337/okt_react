export const paginator = (pageIdNumber,paginationArr,totalPages) => {
    if (pageIdNumber < 13) {
        for (let i = 1; i <= 13; i++) {
            paginationArr.push(i);
        }
    } else if (pageIdNumber >= 13 && pageIdNumber <= 494) {
        for (let i = pageIdNumber - 6; i <= pageIdNumber + 6; i++) {
            paginationArr.push(i);
        }
    } else if (pageIdNumber > 494) {
        for (let i = 488; i <= +totalPages; i++) {
            paginationArr.push(i);
        }
    }
}