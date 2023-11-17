// ts 객체 함수 난이도가 있다. => 객체의 타입을 정의할 때 객체 안에 포함되어있는 각각의 요소의 타입을 정의해야하기 때문에 함수안에 매개변수의 타입을 각각 정의향하기때문.
// 함수가 반환하는 결과값의 타입도 정의해야한다.

function add(a: any, b: any) {
  return a + b;
}

add(1, 2);

//함수가 항상 return문을 사용하는 것은 아니다.
// 아래 형식의 함수 타입은 불충분하다.
// 타입스크립트에서는 return문이 없는 반환값을 주지 않는 함수의 결과값에 대한 타입을 별도로 타입 정의.
//return문을 쓰지 않는 타입 (반환값이 존재하지 않을 때)정의할 때 void를 사용한다.
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}
console.log(printMe("park", 20));

// number, string, boolean, undefined, object, any, void
//꼭 함수 타입 정의가 위처럼만 가능할까?
// 함수 시그니처의 방식으로도 타입을 정의 가능

//전통적인 클래스함수
function printMe00() {}

// 익명함수!
//함수시그니처
let printMe01: (arg0: string, arg1: number) => void = function (
  name: string,
  age: number
): void {
  console.log(`${name}, ${name}`);
};

//화살표함수
let printMe02 = () => {};

// 함수 타입 정의를 할 때
// 직접 매개변수와 반환값에 타입을 정의
// 함수시그니처라는 함수의 도형과 똑같은 형태를 만들어놓고 익명함수이름에 타입을 정의
// 타입별칭

type stringNumberFunc = (arg0: string, arg1: number) => void;
let f: stringNumberFunc = function (a, b) {};
let g: stringNumberFunc = function (c, d) {};
