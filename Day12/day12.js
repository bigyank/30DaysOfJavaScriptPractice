// Day 12 Begin
// Calculate the total annual income of the person
const str =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const regEarn = /\d+/g;
const matches = str.match(regEarn);
const annualIncome = matches.reduce((total, ele) => (total += +ele), 0);
console.log(annualIncome);

// clacuclate distance

const disStr =
  'on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';

const disReg = /-?\d+/g;
const numbers = disStr.match(disReg);
const total = numbers.reduce((total, ele) => (total += +ele), 0);
console.log(total);

// Write a pattern which identify if a string is a valid JavaScript variable
const validReg = /^[a-zA-Z][^-]/g;
const jsStr = 'abc123-';
console.log(validReg.test(jsStr));

// Clean the following tex
const drtStr =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?';
const clenReg = /[^a-zA-z?. ]/g;
console.log(drtStr.replace(clenReg, ''));
