//1. forEach() method
const marks = [25, 35, 45, 55, 65];

function list(numb) {
  console.log(numb);
}

marks.forEach(list);

//2. map method
const marks01 = [1, 2, 3, 4, 5];

function markList(pass) {
  return pass + 10;
}

console.log(marks01.map(markList));

//3. filter method

//Example no.1
const marks02 = [95, 55, 60, 40, 78, 85];

function passMark(pass) {
  return pass > 50;
}

console.log(marks02.filter(passMark));

//Example no.2
const fruits = ["Apple", "Orange", "Banana"];

function healthyFruits(fruit) {
  return fruit.startsWith("A");
}

console.log(fruits.filter(healthyFruits));

//4. reduce method
const marks03 = [95, 55, 60, 78, 40];

function totalMarks(total, marks03) {
  return total + marks03;
}

console.log(marks03.reduce(totalMarks));

//5. every method
const marks04 = [95, 55, 60, 40, 78, 85];

function passMark(pass) {
  return pass > 20;
}

console.log(marks04.every(passMark));

//6. some method
const marks05 = [95, 55, 60, 40, 78, 85];

function passMark(pass) {
  return pass > 99;
}

console.log(marks05.some(passMark));

//7. find method
const marks06 = [1, 2, 3, 4, 5];

function lists(numb) {
  return numb == 3;
}

console.log(marks06.find(lists));

//8. sort method
let skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Node.js",
  "Mongodb",
  "Git",
  "GitHub",
];
console.log(skills.sort());
