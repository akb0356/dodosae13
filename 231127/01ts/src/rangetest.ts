import { rangegeneraotr } from "./range";

let interator = rangegeneraotr(1, 4);
//조건식이 참이여야 돌아감
//function * + yield => 제너레이터함수
// 이터러블객체들의 전유물 => for of 등의 반복실행문 구현
// 이터러블 객체 => 이터레이터 심볼객체 = next()
// 이터러블 객체가 가지고 있는 아이ㅔㅁ을 하나씩 가져와서 출력, 아지 아이템이 남아있으면 true, 없으면 false
while (true) {
  const { value, done } = interator.next();
  if (done) break;
  console.log(value);
}

for (let value of rangegeneraotr(4, 7)) {
  console.log(value);
}
