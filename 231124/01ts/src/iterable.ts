// iterable : 무언가를 순서대로 처리할 수 있는
// iterable objec : 무언가를 순서대로 처리할 수 있는 객체
// js에서 이터러블 객체 : 배열, 문자열
// 이터러블 객체의 특징 : for of 반복문, 전개연산자(...), 구조분해할당

const hi = "hello";

// 문자열도 iterable 객체이기 때문에 for of문으로 하나하나 돌릴 수 있다.
for (let ch of hi) {
  console.log(ch);
}
// 문자 하나하나 쪼개서 배열형식으로 전개연산까지 할 수 있었다.
const chArray = [...hi];
console.log(chArray);

const [ch1, ch2] = hi;
console.log(ch1, ch2);


// 이터러블 객체 : 배열, 메서드
// 1. for of 반복문 사용 가능
// 2. 전개연산자 구문 ...
// 3. 구조분해할당 가능

//이터러블 객체는 유일무이한 기능을 구현할 수 있는 symbol 함수를 가지고 있는데, 해단 symbol 함수는 이터레이터라는 심볼키로 구성되어있다.

//배열이름[심볼키이름]
// Array Iterator 
// next라는 함수가 내장되어있어써봤더니


// 인스턴스객체 (*배열 = 이터러블한 객체) : arr