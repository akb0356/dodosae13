type Person = {
  name: string;
  age: number;
};

const printPerson = ({ name, age }: Person): void =>
  console.log(`name:${name}, age:${age}`);

printPerson({ name: "park", age: 10 });

//함수타입정의
//객체는 key&value로 구성된 하나의 property(속성)들로 이루어져있음
type keyType = {
  [key: string]: string;
};
//하나의 객체를 만들었다!
//매개변수 타입정의 1, 반환할 값의 타입정의2
const makeObject = (key: string, value: string): keyType => ({ [key]: value });
console.log(makeObject("name", "park"));

//class 생성자함수도 결국 constructure() 
