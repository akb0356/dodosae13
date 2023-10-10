// symbol(): 함수 / 1 객체
// 자바스크립트 함수 = > 객체로 만들어놓은 프로토타입

let id = Symbol();

const member = {
  name: "kim",
  [id]: 12345,
};

// 엄격한 자료형
// int = name = 20
// char *name = "john"

// 느슨한 자료형
let one = "20";
let two = 10;
let sum = one + two;
let sum01 = one - two;
// 넣는 값에 따라서 형변환이 되어 문자가되기도 숫자가 되기도 해서 근본없음

// console.log(one + two);
// console.log(sum);
// console.log(sum01);

// 문자가 아니라 숫자로 입력이 된다.
let userInput = parseInt(prompt("아무 숫자나 입력하세요."));

