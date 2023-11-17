// 함수에대한 시간을 계속 끌면서 장황하게 한 이유
//함수표현식
let value = (function (a, b) {
  return a + b;
})(1, 2);

console.log(value)