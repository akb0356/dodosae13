// MAP & SET
// 변칙성 메서드를 의미하는 것이 아님. 주의!
// js 배열을 언제 사용하는가? 왜?
// 복수의 값을 하나로 묶어서 반복, 및 규칙적인 패턴에 의해서 처리하고자 할 때 배열을 사용했다.
// 배열의 가장 큰 약점 (feat. 객체)

let arr = [1, 2, 3, 4, 5];
let obj = {
  title: "test",
  author: "park",
  read: function () {
    console.log(`${title}`);
  },
};

// map을 사용하여 인스턴스 객체화가 되었다.
let bag = new Map();
console.log(bag);

bag.set("color", "red");
console.log(bag);

// key와 value값 순서.
let myCup = new Map([
  ["color", "white"],
  ["haveHandle", "true"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup);

// 한개의 동일한 객체를 중심으로 해당 객체에 다양한 메서드를 붙여서 사용하고자 할 때, 마치 자전거 체인과 같은 모양을 띄고 있다. => 메서드 체이닝 기법(method chaining)

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");
//주체가 같으니깐 그냥 뒤에 바로 붙여서 쓰면 된다.
myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup);
console.log(myCup.size);
// mycup에 color에 매칭되는 값을 찾아주세요.
console.log(myCup.get("color"));
console.log(myCup.has("color"));
console.log(myCup.has("name"));
// console.log(myCup.delete("color"));
console.log(myCup);
// mycup 안에 들어가는 내용을 싹다 삭제할 수 있다. reset
// console.log(myCup.clear());
//배열로 key값만 챙겨온다.
console.log(myCup.keys());

// key만 한꺼번에 찾아와
for (let key of myCup.keys()) {
  console.log(key);
}
// value만 한꺼번에 찾아와
for (let value of myCup.values()) {
  console.log(value);
}
// key와 value를 한꺼번에 찾아와
for (let entry of myCup.entries()) {
  console.log(entry);
}
