// let fruits = ["apple", "banana", "grape"];
// console.log(fruits);

// // 해당요소 안에 ...을 붙이면(전개연산자) 안의 요소만 끌어내려온다.
// console.log(...fruits);

// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(1, 3, 5, 7));

// 전개연산자 이럴때 쓴당
// 매개변수에 어떠한 숫자가 들어오더라도 신경쓰지 않고 다 가져오겠다.
// for of문은 배열 안에 있는 값을 반복하고 싶을 때.
// numbers 중 각각의 number 하나하나 요소를 반복해서 sum에 더해줘
// 그럼 이제 그 sum값을 addNum를 호출하면 반환시켜라.
function addNum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(addNum(1, 3));
console.log(addNum(1, 3, 5, 7));
