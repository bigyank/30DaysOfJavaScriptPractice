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

// Using the above countries array, create an array for countries length

const lenCountries = countries.map(country => country.length);
console.table(lenCountries);

// array with miltiple info of country
const multCountries = countries.map(country => [
    country,
    country.slice(0, 3).toUpperCase(),
    country.length
]);

console.table(multCountries);

// country containing the word 'land'

const landCountries = countries.filter(country => country.includes('land'));
console.table(landCountries);

const substrCon = countries.filter(
    country => country.substr(country.length - 2) === 'ia'
);

console.log(substrCon);

// longest name of country

const lngCountry = countries.reduce((a, b) => {
    return a.length > b.length ? a : b;
});

console.log(lngCountry);

// countries with 5 letter

const fivCountries = countries.filter(country => country.length === 5);
console.log(fivCountries);

// mern stack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const mern = mernStack.map(stack => stack.charAt(0).toUpperCase()).join('');

console.log(mern);

// full Stack
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

// for (const item of fullStack) {
//     for (const nditem of item) {
//         console.log(nditem);
//     }
// }
