// const string = prompt(`영어 소문자로 구성된 임의의 문자를 입력해주세요.`);
// // typeof 어떤 타입의 문자열인지 숫자인지 알려줌.
// // console.log(typeof string);
// const firstCh = string[0].toUpperCase();
// const remainCh = string.slice(1);
// const result = firstCh + remainCh;
// document.write(result);

// 푸는 방법 2번째
const string = prompt(`영어 소문자로 구성된 임의의 문자를 입력해주세요.`);
// join :: 각각의 문자들을 하나로 모을 때 사용.
const result01 = [string[0].toUpperCase(), ...string.slice(1)].join("");
console.log(result01);

//자바스크립트 문법 어려워... js 학습방법
// 1. js 문법 학습
// 2. 문법 확용 방법을 학습
