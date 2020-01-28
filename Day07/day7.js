// return max number from parameter
function maxNumFinder(...maxNum) {
    return Math.max(...maxNum);
}
const maxNum = maxNumFinder(4, 23, 56, 101);
console.log(maxNum);

// returns the season:Autumn, Winter, Spring or Summer
function seasonFinder(monthNum) {
    let season;
    switch (monthNum) {
        case 1:
        case 2:
        case 3:
            season = 'Autumn';
            break;
        case 4:
        case 5:
        case 6:
            season = 'Winter';
            break;
        case 7:
        case 8:
        case 9:
            season = 'Spring';
            break;
        case 10:
        case 11:
        case 12:
            season = 'Summer';
            break;
        default:
            season = 'Not identified';
    }
    return season;
}
const season = seasonFinder(12);
console.log(season);
