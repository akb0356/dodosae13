// call back 예시
// single thread  => 1차선 도로 한번에 하나씩 실행한다. // multi thread 처럼 1차선을 여러개 뚫은 것처럼 보이게 하려고 쓰는 개념이다.

// function showData(name, age) {
//   alert(`안녕하세요 ${name}님, 나이가 ${age}세 이군요!`);
// }

// function getData(callback) {
//   let userName = parseInt(prompt("이름을 입력하세요."));
//   let userAge = parseInt(prompt("나이를 입력하세요."));
//   callback(userName, userAge);
// }

// getData(showData);

// 함수를 인자값으로 가져간 케이스.
// let sum = (a, b) => a + b;
// console.log(sum(2, 10));

// function hello() {
//   return `안녕하세요`;
// }

// function bye() {
//   return `안녕히가세요.`;
// }

// function userCheck(name, fn) {
//   console.log(`${name}님`, fn());
// }
// userCheck("홍길동", hello);
// userCheck("도레미", bye);

// 함수의 반환값으로 반환할 수 있는 케이스
// 반환값에 또다른 함수가 들어올 수 있다.

let init = () => {
  return function (a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`init(30, 20) : ${init()(30, 20)}`);
