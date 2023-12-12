import { Bird, Fish } from "./14bird";

//타입스트립트에서 타입에 대한 정의를 할 때 조건에 따른 타입정의를 해야할 필요가 있을 때가 있다.
// 타입가드라는 기능을 사용해야하는데,
// 객체 instanceof 타입
// 객체 as 타입(*타입단언)
// 객체 is 타입(*is 연산자를 사용해서 타입가드를 주는 경우! )
export const isflyable = (o: Bird | Fish): o is Bird => {
  return o instanceof Bird;
};
