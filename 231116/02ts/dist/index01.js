"use strict";
//public은 접근연산자로 class 객체를 만들었을 때 key값에 내용을 붙이거나 수정하고자 할 때 public이 붙어있으면 누구나 key에 대해 생성하거나 수정을 할 수 있게 접근가능한 상태가 된다. 만약 private도 쓸 수 있는데, 쓰게된다면 한번 생성한 클래스 값의 형태를 절대적으로 유지하겠다. 수정 못하게 하겠다 할때 private를 사용하는데 대부분 public을 사용한다.
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class Person4 {
//   constructor(public theName: string, public theAge: number) {
//     // 해당 추상클래스를 사용하려고 다른 클래스에서 가져가려하면 get을 준다.
//     get name() {
//       return this.theName;
//     }
//     get age() {
//       return this.theAge;
//     }
//   }
//   class Person7 extends Person4 {
//     constructor(theName: string, theAge:number) {
//       super(theName, theAge)
//     }
//   }
//   const personT1 = new Person7(`park`, 10);
//   console.log(personT1)
// }
class AbstractPerson5 {
    age;
    constructor(age) {
        this.age = age;
    }
}
class Person5 extends AbstractPerson5 {
    name;
    constructor(name, age) {
        super(age);
        this.name = name;
    }
}
let jack5 = new Person5("jack", 32);
console.log(jack5);
class A {
    initValue = 1;
    initTarget = "test";
}
const test = new A();
console.log(test);
//# sourceMappingURL=index01.js.map