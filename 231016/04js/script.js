// let sum01 = {
//   name: "park",
// };

// 변수는 못담는게 없다~ 근데 함수를 담은 순간 함수가 된다.(이름이 없는 함수) :: 익명함수, 이름을 변수에 할당함으로서 변수의 이름이 곧 함수의 이름이 된다. = > 그것이 익명함수
// let sum = function (a, b) {
//   return a + b;
// };
// console.log(`함수 실행 결과 : ${sum(10, 20)}`);

// 즉시실행함수
// (function (a, b) {
//   let sum = a + b;
//   console.log(`함수실행결과 : ${sum}`);
// })(100, 200);

// 화살표함수 :: 익명함수를 써야 화살표 함수를 쓸 수 있음.
// let hi = () => `안녕하세요`;

// console.log(hi());

// let multiple = (a, b) => a * b
// console.log(`두 수를 곱한 결과는 ${multiple(10, 20)} 입니다.`)

// 콜백함수(call back || cb)
const btn = document.querySelector("button");
function display() {
  alert("클릭했습니다.");
}

// 함수 안에 매개변수로 함수가 온느 것을 콜백함수.

btn.addEventListener("click", display);
