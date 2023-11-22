const names = ["jack", "jane", "steve"];
//for in과 for of문의 차이가 무엇일까?
//for in : 이터러블 객체의 인덱스값을 찾아올 때
// for of : 이터러블 객체안에 담긴 값을 찾아올 때
for (let i in names) {
  const name = names[i];
  console.log(`[${i}] : ${name}`);
}

let jack = {
  name: "jack",
  age: 32,
};
for (let i in jack) {
  console.log(`${i} : jack[${i}]`);
}
