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
