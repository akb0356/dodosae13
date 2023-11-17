// 타입주석이 필수

//n은 숫자만 받겠다.
let n: number = 1;
// b는 true false 받을거야.
let b: boolean = true;
//s는 문자열만 받을거야.
let s: string = "hello";
// o는 객체만 받을거야.
let o: object = {};

// n은 number만 받는다고 했기 때문에 string 형식을 받을 수 없다고 경고문이 뜨면서 구동이 안된다.
// n = "1";
// b = 1
// s = false
//그럼 반드시 타입주석(:)을 달아야하나요? 타입주석이 없어도 타입을 추론해준다.
// n01에 마우스르 올려보면 number인걸 스스로 인식해서 꼭 달아주지 않아도 괜찮긴 하다. 하지만 우린 왕초보니깐 타입주석을 반드시 쓰시길.
// 타입스크립트에서 타입을 추론하는 방식을 "리터럴타입" 이라고 한다.
let n01 = 1;

//모든 타입을 초월하는 타입 :any
let a: any = 0;
a = "hello";

let u: undefined = undefined;
// u = 1;

let o2: object = {
  name: "park",
  age: 100,
};

o2 = {
  first: 1,
  second: 2,
};

// ts에서 객체의 타입정의는 interface라는 키워드를 사용한다.

interface Iperson {
  name: string;
  age: number;
}

let good: Iperson = {
  name: "jack",
  age: 32,
};

// good = {
//   name:1,
//   age: "32",
// }

//처음 정의한 iperson에 맞추어지지 않으면 하나라도 없을 시 오류로 뜬다.
// let bad1 :Iperson = {
//   name: "jack",
// }

let good1 = {
  name: "kim",
  age: 20,
  etc: true,
};

interface Iperson2 {
  name: string;
  age: number;
  //선택적 속성으로 물음표를 붙인다.
  etc?: boolean;
}

//js 구조분해할당

let key = {
  first: 1,
  second: 2,
};

let { first, second } = key;

//익명인터페이스 => interface를 정의하지 않고 사용하기.
interface ai {
  name: string;
  age: number;
}

// interface를 선언하지 않고 안에 매칭이 되는지 확인하는 용으로 다음과 같이 쓸 수도 있다.
let ai: { name: string; age: number } = {
  name: "jack",
  age: 32,
};

// 함수에서 익명인터페이스가 사용되는 경우

function printMe(me: { name: string; age: number; etc: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}

class Person5 {
  name: string;
  age?: number;
}

let jack1: Person1 = new Person5();

jack1.name = "jack";
jack1.age = 32;

console.log(jack1);
