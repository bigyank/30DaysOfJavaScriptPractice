// Day 9 Begin
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
];

countries.forEach(item => console.log(item));

// Use map to map the products array to its corresponding prices.
products.map(item => console.log(item.product, item.price));

// filter out country start with 'F';
const startsE = countries.filter(item => item.startsWith('F'));
console.log(startsE);

//  array only with string items.

const onlyStr = [
  'a',
  12,
  'bb',
  function() {
    return null;
  },
  'cc'
].filter(ele => typeof ele === 'string');

console.log(onlyStr);

// reduce to sum all the numbers in the numbers array
const totNum = numbers.reduce((total, ele) => {
  total += ele;
  return total;
});
console.log(totNum);

// every to check if all the countries contain the word land
const ifLand = countries.every(ele => ele.includes('land'));
console.log(ifLand);

// findIndex to find the position of the first country containing only six letters
const indxCon = countries.findIndex(ele => ele.length === 6);
console.log(indxCon);

// position of Norway if it doesn't exist in the array you will get -1.

const indxNor = countries.findIndex(ele => {
  if (ele === 'Norway') {
    return true;
  }
  return false;
});
console.log(indxNor);

// total price of products by chaining two or more array iterators
const onlyPrice = products
  .map(ele => ele.price)
  .filter(ele => typeof ele === 'number')
  .reduce((total, ele) => (total += ele));
console.log(onlyPrice);

// sum of price of products using only reduce
// const priceRed = products.reduce((total, ele) => {
//   typeof ele.price === 'number' ? (total += ele.price) : 1;
// });

// console.log(priceRed);

// return an array of first ten countries.
const firstTen = countries.filter(ele => countries.indexOf(ele) < 10);
console.log(firstTen);

// return an array of last 2 countries
const lastTwo = countries.filter(
  ele => [...countries].reverse().indexOf(ele) < 2
);
console.log(lastTwo);

// count the number of letter
const countLett = 'aaabbbccccccd'.split('').reduce((total, item) => {
  total[item] ? total[item]++ : (total[item] = 1);
  return total;
}, {});

const finalWord = Object.keys(countLett).filter(
  element => countLett[element] === Math.max(...Object.values(countLett))
);

console.log(finalWord);
