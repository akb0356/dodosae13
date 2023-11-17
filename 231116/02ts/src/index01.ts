//public은 접근연산자로 class 객체를 만들었을 때 key값에 내용을 붙이거나 수정하고자 할 때 public이 붙어있으면 누구나 key에 대해 생성하거나 수정을 할 수 있게 접근가능한 상태가 된다. 만약 private도 쓸 수 있는데, 쓰게된다면 한번 생성한 클래스 값의 형태를 절대적으로 유지하겠다. 수정 못하게 하겠다 할때 private를 사용하는데 대부분 public을 사용한다.

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

abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let jack5 = new Person5("jack", 32);
console.log(jack5);

// class A {
//   public initValue = 1;
//   public initTarget = "test";
// }

// const test = new A();
// const test01 = A.initValue;
// console.log(test01);
// class 생성자로 생성된 객체를 통해서만 반드시 객체 안에 포함된 값을 가져갈 수 있는걸까?

class classExample {
  public _field: string;
  get field() {
    return this._field;
  }
  set field(thefield: string) {
    this._field = thefield;
  }
  
  public printField() {
    console.log(`field: ${this.field}`);
  }
}

let classExample01 = new classExample();
classExample01.field = "hi";
let test07 = classExample01.printField();
console.log(test07);
