"use strict";
// const fruits = ["사과", "복숭아"];
// // const apple = fruits[0]
// const [apple, peach] = fruits;
// console.log(apple, peach);
Object.defineProperty(exports, "__esModule", { value: true });
// //일부 값만 구조분해할당을 하는 경우
// let [spring, , fall] = ["봄", "여름", "가을", "겨울"];
// console.log(spring, fall);
// //전개연산자를 활용해서 구조분해할당을 하는 경우
// let arr = ["kim", "park", "lee", "choi"];
// let [teacher, ...students] = arr;
// console.log(teacher, students);
// const member = {
//   name: "park",
//   age: 25,
// };
// let { name, age } = member;
// console.log(name, age);
// 중첩객체 구조분해할당.
const students01 = {
    name: "홍길동",
    score: {
        history: 85,
        science: 94,
    },
    friends: ["kim", "lee", "park"],
};
let { name, score: { history, science }, friends: [f1, f2, f3], } = students01;
console.log(name, history, f2);
//# sourceMappingURL=index.js.map