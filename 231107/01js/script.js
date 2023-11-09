console.log("안녕하세요", "지금은", new Date(), "입니다.");
// js는 사칙연산 가능한 언어이다.
// % : a % b = a를 b로 나눈 후 나머지 값을 반환해주는 연산자.

// let var const
// const 변하지 않는 값 , 조금이라도 값이 변할 것 같다 let , var는 그냥 버리셈
// 변수 : 일종의 데이터를 담는 바구니.

let number1 = 10;
let str1 = "json";
let bln = true;
let obj = {
  student: "json",
  grade: 1,
};
let func = () => {
  console.log("test");
};

let a = 1,
  b = 2,
  c = 3;

// let test01 = "test";

// test01 = "test02";

// const test02 = "test";
// test02 = "test03"

// A == B
// 단순 안에 들어온 값만 확인
// A === B
// 안에 들어온 것이 문자열인지 숫자인지까지 판단하여 엄격하게 판단한다.

// a != b
// a !== b

const test07 = "a"
// 변수 안에 담을 사과를 바꾼 것 : 재할당
test07 = "b"

const test08 = "b"
const test07 = test08;
container 안에 새로운 주소를 끼워넣은 것.

let k = 10;
let j = 20;

k += j;
k = k+j;

