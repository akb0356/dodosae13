// 배열의 타입을 정의할 때
const arr: number[] = [1, 2, 3];
// 배열안에 입력을 아이템의 타입이 미정인 상태에서 배열의 타입을 정의해야하는 경우

const arr01: [number, string, boolean] = [1, "2", true];
const func = <T>(array: T[]) => {};

function g1<T>(a: T): void {
  console.log(`test : ${a}`);
}
function g2<T, Q>(a: T, b: Q): void {
  console.log(`test : ${a}`);
}
const g3 = <T>(a: T): void => {};
const g4 = <T, Q>(a: T, b: Q): void => {};

type TypeFunc = <T>(arg0: T) => void;
const test01: TypeFunc = (a) => {};

type TypeFunc02 = <T, Q>(arg0: T, arg1: Q) => void;
const test02: TypeFunc02 = (a, b) => {};

type TypeFunc03 = <T, Q, R>(arg0: TypeFunc, arg1: Q) => R;
const test03: TypeFunc03 = (a, b): => C;
