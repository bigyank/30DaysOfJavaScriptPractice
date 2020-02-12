// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  get getInfo() {
    return `${this.name} of age ${this.age} has ${this.legs} legs
      and is ${this.color} in color`;
  }
}

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs, nature) {
    super(name, age, color, legs);
    this.nature = nature;
  }
  get getInfo() {
    return `${this.name} of age ${this.age} has ${this.legs} legs
      and is ${this.color} in color and is ${this.nature}`;
  }
}
class Cat extends Animal {}

class Finder {
  constructor(cologNum) {
    this.cologNum = cologNum;
  }
  get maxNum() {
    return Math.max(...this.cologNum);
  }
  get minNum() {
    return Math.min(...this.cologNum);
  }
}
const ruby = new Dog('Ruby', 1, 'Red', 4, 'Shy');
console.log(ruby.getInfo);

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const maxNUm = new Finder(value);
console.log(maxNUm.maxNum);
console.log(maxNUm.minNum);
