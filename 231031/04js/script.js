// 배열만 구조분해할당 가능한가요? 아뇨! 객체도 가능합니다!

const member = {
  name: "kim",
  age: 25,
};

//온점표기법으로 name값을 찾아와 할당한것임.
// let name = member.name;
// console.log(name);

//값을 주고자하는 요소의 타입에 따라 받아오고자하는 요소의 형태가 바뀐다 여긴 객체를 받아오고자 하는 것이기 때문에 {}을 사용

//객체축약법 & 구조분해할당 융합. 객체 축약법은 키와값이 일치하면 생략할 수 있었다. 때문에 member만 줘도 member의 키값인 name과 age가 동일하기에 저것만 써도 값이 들어가는 것임.
let { name, age } = member;
console.log(name);
console.log(age);

//객체 안에 중첩객체와 배열이 들어온 상태. 여기서 구조분해할당을 하고싶으면?
let students = {
  name01: "아이유",
  score: {
    history: 85,
    science: 74,
  },
  friends: ["kim", "lee", "park"],
};

//할당하고자하는 것도 객체이기에 일단 객체의 형태
// name은 축약법으로 name만 써도 된다.
let {
  name01,
  score: { history, science },
  friends: [f1, f2, f3],
} = students;

console.log(name01);
console.log(history);
console.log(science);
console.log(f1);
