// 타입스크립트에서 생성자함수 사용 및 타입 정의

class Person2 {
  // age는 있으면 땡큐 없어도 ok
  constructor(public name: string, public age?: number) {
    // this.name = name;
    // this.age = age;
  }
}

//person2의 매뉴얼을 그대로 가져가는 인스턴스 객체가 된 것이다.
let jack2: Person2 = new Person2("jack", 32);

//public을 쓰면 밑에 있는 this들을 안써도 괜찮다!
console.log(jack2);

// ts에서 생성자함수와 인터페이스를 결합해서 사용하는 방법

interface IPerson4 {
  name: string;
  age?: number;
}
class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4 = new Person4("park", 20);
console.log(jack4);

