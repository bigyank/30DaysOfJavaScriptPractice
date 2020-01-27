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

// Part 3 Begin
// Copy countries array(Avoid mutation)

const arrCpy1 = [...countries];
const arrCpy2 = countries.slice(0);

console.log(` ${countries} after copying`);
console.log(` ${arrCpy1} is 1st cpy of countries`);
console.log(` ${arrCpy2} is 2nd cpy of countries`);

const sortedCountries = [...countries].sort((a, b) => a > b);
console.table(sortedCountries);

// Find the country containing the hightest number of characters in the countries array

const extendedCountry = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

// causes timeout errors :'(
// maybe use libraries
const lngExtCon = extendedCountry.reduce((a, b) =>
    a.length > b.length ? a : b
);

console.log(lngExtCon);
