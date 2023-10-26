let bag = {
  type: "backpack",
  color: "blue",
  size: 15,
};

//for in문 - in뒤에 반복하고자하는 객체 넣는다. :: 객체 안에 담긴 key, value 값을 한번에 가져오고 싶을 때 사용.
for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
}

let book1 = {
  title: "자바스크립트",
  pages: 648,
  buy: function () {
    console.log(`이 책을 구입했습니다.`);
  },
};

//key값을 배열형태로 끌고오기
for (let key in book1) {
  console.log(`${key}`);
}

let keys = Object.keys(book1);
console.log(keys);
let values = Object.values(book1);
console.log(values);

//key랑 value값을 같이 찾고싶다.

let entries = Object.entries(book1);
console.log(entries);
