// 전역(global) 변수 & 지역(local) 변수 & 블록(block)변수

// function sum(a, b) {
//   // 함수 안에 쓰여져있는 result는 지역변수
//   let result = a + b;
// }
// console.log(result);

// 전역
// let hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// // local에서 global을 가져다 쓰는건 된다.
// greeting();

// 전역변수는 사용하는 순서에 따라 중요함

// 전역변수는 로컬에서 쓸 수 있지만 로컬은 전역에서 쓸 수 없음.
// let hi = "hello";
// function change() {
//   hi = "bye";
// }
// console.log(hi);
// change();
// console.log(hi);

const factor = 5;
function calc() {
  return num * factor;
}

// 블락변수는 블락 안에서만 쓸 수 있다. num을 쓰고 싶으면 {} 밖으로 빼야한다.
{
  const num = 10;
  let result = calc();
  document.write(`result : ${result}`);
}

// 해결책1

const factor = 5;
function calc(num) {
  return num * factor;
}

{
  let result = calc(10);
  document.write(`result : ${result}`);
}

// 해결책2

const num = 10;
{
  let result = calc();
  document.write(`result : ${result}`);
}
