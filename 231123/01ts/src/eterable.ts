import { range } from "./range";

//for in 객체안의 key값 순환, 배열에서 쓰면 배열안에 있는 index 값을 반환한다.
// for of 배열을 쓰면 객체에서는 value 그 자체를 끌고오고 배열안에는 배열 안의 값 자체를 끌고오기 때문.
for(let value of range())