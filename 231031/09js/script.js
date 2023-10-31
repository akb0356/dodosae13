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
