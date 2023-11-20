// ts를 활용해서 js 배열의 타입을 정의하는 방법
// js에서 배열을 어떻게 만들더라?

const obj = new Object();
const func = new Function();
const arr = new Array();

// 우리는 js의 객체가 만들어놓은 유니버스에서 살고있다.

let array = new Array();
array.push(1);
array.push(2);
array.push(3);

let numbers = [1, 2, 3];
let strings = ["hello", "world"];
console.log(numbers, strings);
