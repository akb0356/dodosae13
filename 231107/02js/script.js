// // 함수 선언
// function myFnc() {
//   console.log("test");
// }
// // 화살표 함수 형태
// const myFnc01 = () => {
//   console.log("test");
// };

// // 함수는 다 쓰면 반드시 호출해야합니다.
// myFnc();
// myFnc01();

// const myFnc02 = (a) => {
//   const result = a + 2;
//   return console.log(result);
// };
// myFnc02(2);

// const calcSum = (a, b, c) => {
//   const result = a + b + c;
//   return console.log(result);
// };
// calcSum(1, 2, 3);

const array = [1, 2, 3, 4, 5];

// 매개변수의 default값을 정의할 수 있다. 수가 없으면 대신 20 넣어줘~
// const calcFunc = (price, tax = 20) => {
//   const result = price + tax;
//   return console.log(result);
// };
// 매개변수에서도 ... 전개연산자 방식으로 받았다.
const calcFunc = (...number) => {
  let result = 0;
  for (let value of number) {
    result += value;
  }
  return console.log(result);
};

//전개연산자로 array 배열 안에 있는 숫자를 전부 끌고 오겠다는 의미.(...)
calcFunc(...array);

let myPrice = prompt("값을 넣어주세요.");

//조건문, 맨 처음 나온 수식은 참이여야 실행이 된다. 참이 아니면 시작도 안함.
if (myPrice >= 50) {
  alert("my price는 50이상입니다.");
} // 아니라고 한다면
else if (myPrice >= 10) {
  alert("myprice 는 10이상 50미만입니다.");
} else {
  alert("myprice 는 10미만입니다.");
}
