// 심벌 : 유일성을 보장하는 값을 생성하고 싶을 때 사용, 주로 여러 개발자들이 공통의 프로젝트를 진행할 때, 객체의 키 이름이 중복될 것을 미연에 방지하고자 할 때!
// 아무리 같은 이름의 다른 내용이 들어와도 별개의 값으로 지정된다.
let var1 = Symbol();
let var2 = Symbol();

console.log(var1 === var2);

let id = Symbol();
const member = {
  name: "park",
  [id]: 12345,
};
console.log(member);
console.log(member[id]);

member.id = 6789;
console.log(member);

let grade = Symbol("grade");
member[grade] = "VIP";
console.log(member);

//객체에서 symbol 활용하는 방법

const id01 = Symbol("id");
const tel01 = Symbol("telephone numver");

const member03 = {
  name: "park",
  age: 20,
  [id01]: 1234,
  [tel01]: function () {
    alert(prompt(`전화번호 : `));
  },
};

console.log(member03);
console.log(member03[id01]);
console.log(member03[tel01]());

// .for을 넣으면 다른곳에 복제가 가능한 전역함수가 된다.
let tel = Symbol.for("tel");
let phone = Symbol.for("tel");

console.log(tel === phone);

//전역심볼로 생성된 심볼의 키를 가져오려면

console.log(Symbol.keyFor(phone));


