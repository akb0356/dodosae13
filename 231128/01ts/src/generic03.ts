// 배열, 함수의 아ㅣ템 혹은 매개변수의 타입이 미지정상태일 때, 타입변수를 활용 타입정의!
// 제네릭타입
//객체의 타입을 정의할 때도 제네릭타입을 적용할 수 있다.

interface obj {
  name: string;
  age?: number;
}

const obj01: obj = {
  name: "park",
  age: 20,
};

//객체는 key와 value로 구성이 되어있다. => property
// 그런데 key 안에 담길 value 값이 어떤 타입으로 미정인경우!
//사용자가 선택하는 옵션값에 따라서 key 안에 담겨야하는 값이 가변적으로 바뀌는 경우가 발생!
// 버튼옵션 => 화면출력값
// 조건문 => js
// react => 명령문, 선언문
// if(많이 안쓰인다.), 삼항조건연산자
//제네릭 인터페이스
// interface Ivaluable<T> {
//   value: T;
// }

//제네릭 총집합!
// 1. 제네릭함수구문
function identity<T>(arg0: T): T {
  return arg0;
}

//2. 제네릭 타입별칭 구문
type Ivaluable<T> = {
  value: T;
};

//3. 제네릭 클래스 구문
class Valuable<T> {
  //접근제어자 (public, private)
  //오버로드, 생성자함수가 올 수 있음.
  constructor(public value: T) {}
}

//1-1 화살표함수의 제네릭함수 구문
const identity01 = <T>(arg0: T): T => {
  return arg0;
};
