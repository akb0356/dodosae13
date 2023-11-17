import { IPerson, ICompany } from "./index04";

// let jack: IPerson = {
//   name: "jack",
//   age: 32,
// };

// let apple:ICompany = {
//   name: "apple computer",
//   age: 43,
// };

//객체축약법 :: 객체 안에 키와 새롭게 생성하고자 하는 변수명이 동일한 경우

// let jack: IPerson = { name: "jack", age: 32 };
// let apple = { name: "apple computer", age: 43 };

// console.log(jack, apple)

// let jack = { name: "jack", age: 32 };
// let { name, age } = jack;
// console.log(name, age);

// let addressType = {
//   country: string,
//   address1: string,
//   address2: string,
//   address3: string,
// };
// let address: addressType = {
//   country: "korea",
//   address1: "gangnam-gu",
//   address2: "sinsa-dong",
//   address3: "789 street",
// };

// js 전개연산자를 활용해서 서로 다른 배열 혹은 객체값을 하나로 합칠 때에도 사용했음.

let a = { x: 0 };
let b = { y: 0 };

//이렇게하면 객체안의 객체로 오지만
// let coord = {a, b}
//이렇게하면 요소로 아이템으로 가져올 수 있음.
//중첩객체의 형식이 아닌, 1개의 통합된 객체값을 도출, 서로 다른 배열 요소를 하나의 배열 안에 아이템으로 가져오고 싶을 때.
// let coord = {...a, ...b}
let coord = { ...{ x: 0 }, ...{ y: 0 } };
console.log(coord);

//객체타입 영역에서의 이단아
let person: object = {
  name: true,
  age: 32,
};

//type변환장치
(<{ name: boolean }>person).name;
