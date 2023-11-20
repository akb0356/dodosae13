// 그동안 사용한 보통함수
// 여기서는 반환값으로 a+b를 썼기때문에 void를 사용할 수 없다.
const add1 = (a: number, b: number) => a + b;

//고차함수
const add2 =
  (a: number): ((arg0: number) => number) =>
  (b: number): number =>
    a + b;

const result = add2(1)(2);
console.log(result);
