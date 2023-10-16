// function 함수명(매개변수 (*선택적) => 인수 혹은 인자값) {
//   함수실행문
// }
// 변수명, 함수명 => 카멜표기법(calcSum), 스네이크(cal_sum)

// 매개변수가 존재하지 않는 함수
// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다.`);
// }
// calcSum();
// 함수를 호출하려면 함수명을 쓰고 소괄호를 쓰세요. 그래야 호출이 됩니다.

// 함수를 가져다 쓰려면(선언하면) => 함수 호출을 해야 실행이 된다.

// NaN :: Not a Number

// 매개변수가 존재하는 함수
// function sum(a, b) {
//   let result = a + b;
//   alert(`두 수의 합 : ${result}`);
// }
// sum(3,5);
// 매개변수 선언을 했다면 함수 호출을 할 때 매게변수 인자값을 함께 정의해야한다. 하지 않고 호출하면 NaN이 뜬다.

// 하다가 작업이 막히면 디버깅 & 버그라고 칭한다.(코드가 돌긴 도는데 원활하게 돌지 않는 문제를 해결/개선 한다는 의미 :: trouble shooting)
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }
// calcSum(10);

let num = parseInt(prompt("몇까지 더할까요?"));
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  // 1부터 n까지 더한 값을 sum값에 돌려준다.
  return sum;
}
// // ${} 안에는 원래 변수만 들어감, 함수는 못들어감, 하지만 넣고싶다면 함수결과값을 변수에 담으라는 호출명의 return을 써야한다.
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}`);
