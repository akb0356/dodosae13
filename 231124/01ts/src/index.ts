// js 이터러블객체 & 제너레이터 함수 사용 복습 & 심볼
// js 심벌 => 객체를 생성하는데 있어서 유일한 객체 프로퍼티키를 만들고 관리하고 싶을 때

let var1 = Symbol();
let var2 = Symbol();

let result = var1 === var2;

interface obj {
  name: string;
  [x: symbol]: number | string;
}

let id = Symbol();

const member: obj = {
  name: "park",
  [id]: 12345,
};

console.log(member[id]);


//명확하게 grade라는 인자값을 할당하여 이 symbol은 grade라는 값을 가지고 있다. 다른 사람이 봐도 알 수 있도록 할당했다.
let grade = Symbol("grade");
member[grade] = "VIP";

console.log(member);
