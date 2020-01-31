import { people, users } from './data.js';
// day 8 begin
// Dog Object
const myDog = {
    name: 'Honey',
    legs: 4,
    age: 2,
    color: 'golden',
    get bark() {
        return 'Woff woff';
    },
    set breed(breedName) {
        this._breed = breedName;
    },
    get breed() {
        return this._breed;
    }
};

console.table(myDog);
console.log(myDog.bark);
myDog.breed = 'German Shepard';
console.log(myDog.breed);

// part 2 begin

// Get all keys or properties of people object
const peopleKeys = Object.keys(people);
const peopleValues = Object.values(people);

let count = 0;
for (const value of Object.values(people)) {
    value.isLoggedIn && value.points === 50 ? (count += 1) : null;
}
console.log(`${count} people are loggedin with 50 points`);

let countSkill = 0;
let pepWithSkil = 0;

for (const [key, value] of Object.entries(people)) {
    if (value.skills.length > countSkill) {
        pepWithSkil = key;
        countSkill = value.skills.length;
    }
}

console.log(
    `${pepWithSkil} is the most skilled person with ${countSkill} skills,`
);

// Find people who are MERN stack developer from the people object

const mern = ['Node.js', 'React', 'Express', 'MongoDB'];
const mernPeople = [];
for (let [key, value] of Object.entries(people)) {
    let count = 0;
    mern.map(element => {
        if (value.skills.includes(element)) {
            count = 0;
        } else {
            count += 1;
        }
    });
    if (count === 0) {
        mernPeople.push(key);
    }
}

console.log(mernPeople);

const clonePeople = Object.assign({}, people);
console.log(clonePeople);

// Part 3

function signIn(username, password) {
    for (const user of users) {
        if (user.username === username && user.password === password) {
            user.isLoggedIn = true;
            return alert('Status Changed Sucessfully');
        }
    }
    alert('Doesnt exist user or password');
}

const logUser = prompt('Username ');
const logPass = prompt('pass: ');
signIn(logUser, logPass);

console.log(users);

function checkUser() {
    let newUser;
    const userList = [];
    for (const value of users) {
        userList.push(value.username);
    }
    do {
        newUser = prompt('User Name: ');
    } while (userList.includes(newUser));
    return newUser;
}

class MakeUser {
    constructor(id, username, email, password, createdAt, isLoggedIn) {
        this._id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.isLoggedIn = isLoggedIn;
    }
}

const id = (Math.random() * 10).toString(36).slice(4, 10);
const username = checkUser();
const email = prompt('Email: ');
const password = prompt('Password: ');
const time = new Date();
const status = false;

const newUser = new MakeUser(id, username, email, password, time, status);
users.push(newUser);
console.log(users);
