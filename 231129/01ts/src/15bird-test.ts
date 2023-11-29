import { Bird, Fish } from "./14bird";

//타입가드 :: 센터, 포워드, 가드
//타입의 가드를 만드는 방법
// 1) instance of 연산자 : 객체 instance of 타입
// 타입단언 : 객체 as 타입
export const flyOrswim = (o: Bird | Fish): void => {
  if (o instanceof Bird) {
    (o as Bird).fly();
  } else if (o instanceof Fish) {
    (o as Fish).swim();
  }
};
