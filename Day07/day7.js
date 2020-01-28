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

// part 2
// takes array as a parameter and it prints out each value of the array

function prntArr(arr) {
    console.log(...arr);
}

prntArr([1, 2, 'a', 12]);

//  showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function formatedDate() {
    const dateTime = new Date();
    const formDate = `${dateTime.getDate()}/${dateTime.getMonth() +
        1}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}`;
    return formDate;
}

const dateToday = formatedDate();
console.log(dateToday);

// swapValues. This function swaps value of x to y.

function swapValues(x, y) {
    [x, y] = [y, x];
    return `${x} is a x and ${y} is a y now`;
}

const swpdVal = swapValues(12, 8);
console.log(swpdVal);

// takes any number of arguments and return the sum of the arguments

function sumArgs(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

const sumArgsVal = sumArgs(5, 2, 2);
console.log(sumArgsVal);

// random word gen
function randWord() {
    return Math.random()
        .toString(36)
        .slice(2, 7)
        .toUpperCase();
}

console.log(randWord());

// random Hex generator
function hexGen() {
    const decNum = Math.floor(0x1000000 * Math.random());
    const hexNum = decNum.toString(16);
    return hexNum;
}
console.log(hexGen(100));

// part 3
function rgbGen() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
}

const colr = rgbGen();
console.log(colr);

// generate any hex and rgb
function genMultCol(uColr, times) {
    const finlArr = [];
    for (let i = 0; i < times; i += 1) {
        finlArr.push(uColr === 'rgb' ? rgbGen() : hexGen());
    }
    return finlArr;
}

const collColr = genMultCol('hex', 3);
console.log(collColr);
