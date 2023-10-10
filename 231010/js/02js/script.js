// 현재 안쓰이는 언어
var num = 10;
console.log(num);
var num = 20;
console.log(num);

// 변수는 let
let num01 = 10;
console.log(num01);
let num02 = 20;
console.log(num02);

// 재할당
num01 = 30;
console.log(num01);

// 상수(*변하지않는 고정된 값) 선언하고 싶을 때 쓰는 코드
const num03 = 10;
console.log(num03);

// 오류코드
// num03 = 50;
// console.log(num03);

// let x = 20;
// let sum = x + y;
// let y = 20;

// console.log(sum);


// 변수의 호이스팅(끌어올리다)
var x = 20;
var sum = x + y;
var y = 20;

console.log(sum);
