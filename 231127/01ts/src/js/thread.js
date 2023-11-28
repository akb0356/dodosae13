// js는 동기 / 비동기 !
//동기 : 한번에 하나씩 무언가를 처리
//1차선
// 비동기 : 한번에 하나씩 해야하는 일들을 동시에 여러개 진행할 수 있는 것처럼 만들어주는 방식
// 커피숍의 키오스크 & 바리스타
// a: 아메리카노 (*키오스크)
// 바리스타 : 아메리카노
// b: 바닐라라떼(*키오스크)

// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
//   console.log("B");
// }
// function displayC() {
//   console.log("C");
// }
// displayA();
// displayB();
// displayC();

function displayA() {
  console.log("a");
}
function displayB(callback) {
  setTimeout(() => {
    console.log("b");
    callback();
  }, 2000);
}
function displayC() {
  console.log("c");
}
displayA();
displayB(displayC);

// js의 대표적인 비동기처리방식 : 콜백ㅎ함수
// 콜백지옥 => 함수 => 함수 => 코드문제!(*문제점발생지점을찾기힘들다)
// 프로미스()