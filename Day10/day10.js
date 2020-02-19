import { countriesData } from './data.js';
// day 10 begin
// create an empty set
const emptSet = new Set();

console.log(emptSet);

for (let i = 0; i < 10; i += 1) {
  emptSet.add(i);
}

console.log(emptSet);

emptSet.delete(0);
console.log(emptSet);

// Clear a set

emptSet.clear();
console.log(emptSet);

// Create a set of 5 string elements from array
const dupFruits = ['Apple', 'Apple', 'Mango', 'Orange', 'Orange'];
const unqFruits = new Set(dupFruits);
console.log(unqFruits);

// Create a map of countries and number of characters of a country
const countries = ['Nepal', 'India', 'Pakistan', 'Maldives'];
const corMap = new Map();

countries.map(ele => corMap.set(ele, ele.length));
console.log(corMap);

// Find a union b

const a = [1, 2, 3, 4, 5];
const b = [0, 1, 2, 5, 7, 8];
const c = [...a, ...b];
const uniAB = new Set(c);
console.log(uniAB);

// Find a intersection B

const intrAB = b.filter(ele => a.includes(ele));
const setIntrAB = new Set(intrAB);
console.log(setIntrAB);

// How many languages are there in the countries object file.
console.log(countriesData);
const dataLen = new Set(countriesData);
console.log(dataLen.size);
