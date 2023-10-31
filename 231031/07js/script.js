// 1. 자연수를 입력받아 저장해둘 값
// 2. 받은 자연수들을 서로 비교하는 값
// 3. 출력된 가장 작은 값을 출력시키기

// let number1 = prompt("숫자a를 주세요.");
// let number2 = prompt("숫자b를 주세요.");
// let number3 = prompt("숫자c를 주세요.");

// let numbers = new Array(number1, number2, number3);
// numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(numbers[0]);

let a = parseInt(prompt("첫번째 숫자"));
let b = parseInt(prompt("두번째 숫자"));
let c = parseInt(prompt("세번째 숫자"));

let numTotal = (a, b, c) => {
  let result;
  if (a < b) {
    result = a;
  } else {
    result = b;
  }
  if (c < result) {
    result = c;
  }
  return result;
};
console.log(numTotal(a, b, c));
