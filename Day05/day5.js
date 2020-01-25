// declaring empty array
const emptArr = [];

// Array with 5 items
const countries = ['Ethiopia', 'Albania', 'Canada', 'Bolivia', 'Denmark'];

// print length of array

console.log(countries.length);
console.log(countries[0]); // first item

// print last item (without mutating)
console.log([...countries].pop());

// print each item on array
countries.map(item => console.log(item));

// print each item with uppercase
countries.map(item => {
    return console.log(item.toUpperCase());
});

// print each item in a sentence
console.log(`${countries.join(', ')} are big countries`);

if (countries.includes('Canada')) {
    console.log('Canada');
} else {
    console.log('Country isnot available');
}

// return country with repeating 'a' in name
const containsA = countries.filter(country => {
    return country.indexOf('a') !== country.lastIndexOf('a');
});

console.log(containsA);

// sort the array with sort method (without mutating array)
const sortedArr = [...countries].sort((a, b) => b < a);
console.log(sortedArr);

// reversing the array (without mutating)
const reverseArr = [...countries].reverse();
console.log(reverseArr);

// Slice out the first 3 items from the array
console.log([...countries].splice(0, 3));

// Slice out the last 3 items from the array
console.log([...countries].splice(-3));

// part 2

const text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

console.log(text.replace(/,/g, '').split(' '));
console.log(text.replace(/,/g, '').split(' ').length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// adding meat at the beginning
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// adding sugar at the end of the cart
shoppingCart.push('Sugar');
console.log(shoppingCart);

// removing Honey without mutating Array
const filteredShop = shoppingCart.filter(item => item !== 'Honey');
console.log(filteredShop);

// removing Honey from Shopping Cart
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);

// concating two array
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sorting
ages.sort((a, b) => a > b);
console.log(ages);

// Max and min age
const maxAge = Math.max(...ages);
const minAge = Math.min(...ages);

// alternate method, when sorted first item is min and last is max

// dividing the country array into two parts

const countryFirst = [...countries].splice(0, Math.ceil(countries.length / 2));
console.log(countries);
console.log(countryFirst);

const countrySecond = [...countries].splice(Math.ceil(countries.length / 2));
console.log(countrySecond);
