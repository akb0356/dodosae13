<<<<<<< HEAD
// 삼각형이 되기위한 조건
// 두변의 합이 가장 큰 1개의 변의 크기보다 작으면 안된다.

let a = parseInt(prompt("첫번째 변"));
let b = parseInt(prompt("두번째 변"));
let c = parseInt(prompt("세번째 변"));

let solution = (a, b, c) => {
  let max;
  let answer = "Yes";
  let total = a + b + c;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (total - max <= max) {
    answer = "No";
  }
  return answer;
};

console.log(solution(a, b, c));
=======
let a = parseInt(prompt("첫번째 변"));
let b = parseInt(prompt("두번째 변"));
let c = parseInt(prompt("세번째 변"));

let numbers = new Array(a, b, c);
numbers.sort((a, b) => {
  return a - b;
});

let compare = (numbers) => {
  if (numbers[0] + numbers[1] > numbers[2]) {
    alert(`삼각형을 만들 수 있습니다.`);
  }
  alert(`삼각형을 만들 수 없습니다.`);
};

compare(numbers);
>>>>>>> 3dff85b0898dd73da79bbe75ba1ef0f8a62170a1
