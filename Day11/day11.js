// Day 11 begin
import { constants, countries, rectangle, users } from './data.js';

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e);
console.log(pi);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
console.log(fin);
console.log(est);

// Destructure the rectangle object by its properties or keys.
const { width, height, area, parameter } = rectangle;

console.log(width);
console.log(height);

// Level 2
// Iterate through the users array and get all the keys of the object using destructuring

for (const { name, scores, skills, age } of users) {
  console.log(name);
  console.log(scores);
  console.log(skills);
  console.log(age);
}

// Find the persons who have less than two skills

const lessThan2 = users.filter(({ name, scores, skills }) => skills.length < 2);
console.log(lessThan2);

// Level 3
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

//Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const stuObj = students.map(([name, skills, scores]) => {
  return { name, skills, scores };
});

console.log(stuObj);

const newStudent = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js']
  }
};
const newStudentCopy = { ...newStudent };

// Add Bootstrap with level 8 to the front end skill sets
newStudentCopy.skills.frontEnd = [
  ...newStudentCopy.skills.frontEnd,
  { skill: 'bootstrap', skill: 8 }
];
console.log(newStudentCopy);
