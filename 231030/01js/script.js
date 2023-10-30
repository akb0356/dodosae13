// 배열을 생성하는 3가지 방법

// let season = [];
// season[0] = "spring";
// season[1] = "summer";
// console.log(season);

// 실무에서 가장 많이 쓰이는 방법
// let pets = ["dog", "cat", "parrot"];
// console.log(pets);

// let fruits = new Array("apple", "peach", "grape");
// console.log(fruits);

// let pets = ["dog", "cat", "parrot"];
// console.log(pets[1]);

// 배열 추가
// let fruits = new Array("apple", "peach", "grape");
// fruits[4] = "배";

// 모든 배열을 끌고 오는 간단한 방법
// let colors = ["red", "green", "blue", "white", "black"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// 모든 배열을 끌고 오는 간단한 방법2
// 매개변수 혹은 인자값이 1개씩 움직이는 경우에 for each를 사용한다.
let animals = ["lion", "bear", "bird"];
// animals.forEach((animal) => {
//   console.log(animal);
// });

// 매개변수 혹은 인자값이 2개인 경우?
animals.forEach((animal, index) => {
  console.log(`animals[${index}] : ${animal}`);
});

//매개변수 인자값이 3개인경우
animals.forEach((animal, index, array) => {
  console.log(`[${array}] [${index}] : ${animal}`);
});
