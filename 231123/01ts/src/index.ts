const mulitply = (result: number, val: number) => result * val;
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter는 콜백사용가능
//reduce 누산기의 기능을 한다.
let tempResult = numbers
  .filter((val) => val % 2 != 0)
  .map((val) => val * val)
  .reduce(mulitply, 1);
//해당 값에 대한 제곱근을 반환하는 sqrt
let result = Math.round(Math.sqrt(tempResult));
console.log(result);
