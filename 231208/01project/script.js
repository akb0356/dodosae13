// 객체줄임표기법 :: Object Shorten Assignment

// const name = "kim";
// const age = 20;

// const person = {
//   name,
//   age,
// };

// console.log(person);

//구조분해할당 :: destructuring

// const person = {
//   name: "david",
//   age: 20,
// };

// //FM
// // const name = person.name;
// // console.log(name);

// // const name02 = person["name"];
// // console.log(name02);

// const { name, age } = person;
// console.log(name, age);

//전개연산자 (spread operator)

// const arr = [1, 2, 3, 4];

// // const [a, b] = arr;
// // a와 b는 (1, 2) 이렇게 할당되었다. 근데 나머지도 챙겨오고싶다면?
// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

// spread operator(전개연산자) > deep copy(깊은복사) & shallow copy(얕은복사)

const person = {
  name: "david",
  age: 20,
};
// //shallow copy
// let person3 = person;
// console.log(person3 === person);

// let person2 = { ...person };

// console.log(person2 === person);

const person2 = {
  ...person,
  address: "seoul",
  name: "kim",
};

console.log(person2);

const a = [1, 2];
const b = [...a, 3];
console.log(b);

const c = [...a, ...b];
console.log(c);

// 삼항조건연산자

const coffee = {
  name: "americano",
  price: 2400,
};

//IF문

// if(coffee) {
//   console.log(coffee.name)
// } else {
//   console.log('there is no coffee')
// }

console.log(coffee ? coffee.name : "there is no coffee");
