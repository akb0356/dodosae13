//

// let arr01 = [1, 2, 3, 4, 5];
// let arr02 = [1, 2, 3, 4, 5];
// let result = [...arr01, ...arr02];
// let [a, b] = arr02;
// for (let a of arr) {
//   console.log(a);
// }

//일반적 함수 생성 방법
function fnc() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}
fnc();

//제너레이터 :: gen은 그냥 함수명 바뀌어도 ok

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g1 = gen();
console.log(g1);

// 일반 객체에서 gen함수를 썼다는 이유만으로도 for of문을 쓸 수 있게 되었다.
let g2 = gen();
for (let i of g2) {
  console.log(i);
}
