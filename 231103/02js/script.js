// js 콜백함수 활용 비동기처리의 취약점 :

//js에서의 콜백지옥 예시. :: 나중에 어디에서 문제가 발견되었는지 찾기가 힘들어지는 비효율적이라는 단점.
// const displayLetter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//         setTimeout(() => {
//           console.log("stop!");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// displayLetter();

//콜백지옥을 해소하기 위해 나온 것. promise()
//js 프로미스 객체 (내장객체)  ::  Date, Array, Object

//반드시 콜백함수를 받는다, 해당 콜백함수 안에 두개의 매개변수를 받고 그 두개도 함수다.

let likePizza = true;

//pizza는 이제 promise 객체를 할당받아 인스턴스가 되어 promise의 메서드를 쓸 수 있다.
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve(`피자를 주문합니다.`);
  } else {
    reject(`피자를 주문하지 않습니다.`);
  }
});

//then이 pizza의 실행 매개변수를 받아와 실행시켜준다. then과 catch는 항상 같이 움직여야함!
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료!");
  });
