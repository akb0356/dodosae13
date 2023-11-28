import { IterableUsinggenterator } from "./usinggenerator";

const array = [1, 2, 3];
const test = new IterableUsinggenterator(array);
for (let item of test) {
  console.log(item);
}

//우리는 지금까지 class 생성자를 활용해서 이터러블한 객체를 만들었고, 이 이터러블한 객체를 만들기 위해서 제너레이터 함수를 사용했음 => 

