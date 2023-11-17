// 실행문 방식으로 함수를 표현

const arrow1 = (a: number, b: number) => {
  return a + b;
};

//표현식문방식 :: 항상 쓸 수 있는 것은 아님, 어떤 조건에 충족이 되어야 쓸 수 있음. cpu에서 실행된 함수의 코드결과값을 알아서 자동으로 알려준다. 때문에 굳이 return문을 사용하지 않아도 결과값을 반환해줌!
//보통은 실행문 방식으로 쓰는게 안전하다, 표현식문으로도 쓸 수 있다는걸 알아두면 좋으니 참고 바람.
const arrow2 = (a: number, b: number) => a + b;

//실행문방식
// let x = 10;
// if (x > 0) {
//   x = 1;
// }

//표현식문방식
let x = 10;
if (x > 0) x = 1;

let a = 1;
let b = 5;
if (a > b) console.log(a);
else console.log(b);
