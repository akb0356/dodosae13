// 콘솔창에 0부터 9까지의 코드를 작성해보세요
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// let myNumber = 0;
// while (myNumber < 10) {
//   console.log(myNumber);
//   myNumber ++;
// }

// continue : 해당 요소를 건너뛰고 이어서 반복문을 실행.
//console에 홀수를 출력해내는 방법
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     //반복문을 실행시키지 않겠다.
//     continue;
//   }
//   console.log(i);
// }

// const flgA = true;
// const myFuntion = (flgA) => {
//   for (let i = 0; i < 10; i++) {
//     if (flgA === false) {
//       continue;
//     }
//     if (i % 2 === 0) {
//       continue;
//     }
//     console.log(i);
//   }
// };

// myFuntion(flgA);

// const a = 10;
// const b = 20;

// console.log(a < b);
// console.log(a > b);

//문자열을 사용할 때 boolean
//includes() => 해당 메서드 안에 인자값으로 들어온 문자열이 있으면 true, 없으면 false

// const user = "iPhone";
// const isIos = navigator.userAgent.includes(user);
// console.log(isIos);

// if (isIos) {
//   alert(`어서오세요. ${user} 유저님! 반갑습니다.`);
// } else {
//   alert(`어서오세요. 고객님! 반갑습니다.`);
// }

//js에서 계산할 수 있는 최대 정수 값
const num = Number.MAX_SAFE_INTEGER;

//js에서 계산할 수 있는 최소 값
const num1 = Number.MIN_SAFE_INTEGER;
console.log(num);
console.log(num1);


// 답정너 형식으로 의도적으로 걸어주는 경우가 있다.
let user = parseInt(prompt("원하시는 숫자를 입력하세요."));
if (user !== null || user !== undefined) {
  if (user < Number.MAX_SAFE_INTEGER) {
    console.log("A");
  }
}
