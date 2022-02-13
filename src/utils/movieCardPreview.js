export const movieCardPreview = (overview) => {
    let variable = overview.split(' ').splice(0, 10).join(' ')

    const lastSymbol = variable.length - 1;

    if (variable[lastSymbol] === ',') {
        const indexOf = variable.indexOf(variable[lastSymbol]);
        variable = variable.substring(0, indexOf);
    }

    return variable.concat('...');
}
