type stringMunberFunc = (arg0: string, arg1: number) => void;
const f = function (a: string, b: number): void {};
const g = function (c: string, d: number): void {};

//객체의 타입 정의 : interface() => 객체 타입정의 전문

// interface INameable {
//   name: string;
//   age: number;
// }

// const jack = {
//   name: "jack",
//   age: 20,
// };

//객체의 타입 정의 : interface가 아닌 type 별칭형식으로도 타입정의가 가능하다.

type Person = {
  name: string;
  age: number;
};

//js에서 함수의 매개변수 값을 default로 지정이 가능했다.
//js 문법에서 구조분해할당 => 할당하고자하는 값과 값을 받는 키가 동일한 네이밍을 가지고 있는 경우, 축약해서 1번만 사용할 수 있었다..
// const makePerson = (name: string, age: numbe = 10): Person => {
const makePerson = (name: string, age: number): Person => {
  const person = {
    name,
    age,
  };
  return person;
};

console.log(makePerson("jack", 20));
