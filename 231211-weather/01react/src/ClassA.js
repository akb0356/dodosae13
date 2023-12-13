// Js에서 클래스를 왜 쓰는가 : 공통된 형태를 띄고 있는 객체를 보다 손쉽고, 효율적으로 생성! (붕어빵틀)

// const studentA = {
//   name: "david",
//   grade: "A+",
//   age: 20,
//   study() {
//     console.log(`열심히 공부함.`);
//   },
//   introduce() {
//     console.log(`안녕하세요`);
//   },
// };
// const studentB = {
//   name: "jane",
//   grade: "B+",
//   age: 20,
//   study() {
//     console.log(`최선을 다하는 인재`);
//   },
//   introduce() {
//     console.log(`감사합니다.`);
//   },
// };

class Student {
  //field
  name;
  grade;
  age;
  // 생성자 (constructor)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  //method
    study() {
    console.log(`열심히 공부함.`);
  },
}

const studentA = new Student("david", "B+", 20);
//studentA는 인스턴스 객체 (*클래스 생성자를 통해서 탄생한 일종의 붕어빵
// Student 클래스 생성자 : 붕어빵 틀)
//new Student : 프로토타입 함수
// new Student통해서 만들어지는 객체 => 프로토탕ㅂ 객체

class StudentDeveloper extends Student {
  //field
  favoriteSkill;
  //constructor
  constructor(name, grade, age, favoriteSkill) {
    super(name, grage, age);
    this.favoriteSkill = favoriteSkill;

  }
  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`)
  }
}

const studentB = new StudentDeveloper('jane', 'B+', 22, 'java')
console.log(studentB)

// 접근제어자를 사용하면 굳이 field값을 사용하지 않고 생략해도 뇓다. + this를 활용한 객체의 key도 생략이 가능하다.
// 