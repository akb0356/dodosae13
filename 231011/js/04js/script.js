// let x = 10
// if(x > 5) {
//   console.log(`x는 5보다 큽니다.`)
// }

// if문
// let y = 10;
// if (y < 5) {
//   console.log(`y는 5보다 작습니다.`);
// }
// y -= 5;
// console.log(y);

// if else문
// let userInput = prompt("이름을 입력하세요!")
// if(userInput === null) {
//   alert("취소하셨습니다.")
// } else {
//   alert(`${userInput}님 환영합니다!`)
// }

// if else if문
// let score = parseInt(prompt("scss 시험점수 : "));
// if (score != null || score != undefined) {
//   if (score >= 90) {
//     alert("A학점");
//   } else if (score >= 80) {
//     alert("B학점");
//   } else {
//     alert("C학점");
//   }
// }

// let userInput = prompt("이름을 입력하세요!");

// if문의 조건문이 단문으로 끝날 때는 {}생략 가능.
// if (userInput !== null) alert(userInput);

// 짝수홀수만들기
let userNumber = prompt("숫자를 입력하세요!");
if (userNumber !== null && userNumber !== "") {
  userNumber = parseInt(userNumber);
  userNumber % 2 === 0
    ? alert(`${userNumber} : 짝수`)
    : alert(`${userNumber} : 홀수`);
} else {
  alert("정상적인 숫자를 입력하세요.")
}