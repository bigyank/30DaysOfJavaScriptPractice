// day 6 begin
// github calander check
// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

let sum = 0;
let n = 0;
while (n !== 101) {
    sum += n;
    n += 1;
}
console.log(sum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumEve = 0;
let sumOdd = 0;
let n1 = 0;
while (n1 !== 101) {
    n1 % 2 ? (sumOdd += n1) : (sumEve += n1);
    n1 += 1;
}

console.log(`The sum of even is ${sumEve}`);
console.log(`The sum of odd is ${sumOdd}`);

//  Print sum of evens and sum of odds as array

const sumArr = [0, 0];
for (let i = 0; i <= 100; i += 1) {
    sumArr[i % 2] += i;
}
console.log(sumArr);

// generate Random number in a array

function genRandArr(number) {
    const randArr = [];
    while (randArr.length !== 5) {
        randArr.push(Math.ceil(Math.random() * number));
    }
    console.table(randArr);
}

genRandArr(10);

// generate unique Random number in a array

function genUniqRandArr(number) {
    const randArr = [];
    while (randArr.length !== 5) {
        const randNum = Math.ceil(Math.random() * number);
        const doNth = function() {};
        const addToArr = function() {
            randArr.push(randNum);
        };
        const ifIncludes = randArr.includes(randNum);
        ifIncludes ? doNth() : addToArr();
    }
    console.table(randArr);
}

genUniqRandArr(10);

// generate random letter
const randLet = Math.random()
    .toString(36)
    .slice(2, Math.random() * 11); // 11 because length of character
console.log(randLet);

// generate random Hexa value
const randHex = Math.random()
    .toString(16)
    .slice(2);
console.log(randHex);

// uppercase all items in array
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const uppCountries = countries.map(country => country.toUpperCase());
console.table(uppCountries);
