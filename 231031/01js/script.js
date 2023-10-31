// const hello = (name, message = "안녕하세요") => {
//   console.log(`${name}님 ${message}`);
// };

// const addNum = (a, b) => {
//   let sum = 0;
//   sum += a;
//   sum += b;
//   return sum;
// };

// 전개구문
const addNum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const animals = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

let sum01 = animals.concat(fruits);
console.log(sum01);

let sum02 = [...animals, ...fruits];
console.log(sum02);

// 원시타입복사 & 주소타입 복사
let take01 = "red";
let take02 = take01;
console.log(take01);
console.log(take02);
take02 = "blue";
console.log(take01);
console.log(take02);

let obj01 = {
  title: "js",
  page: 360,
};
console.log(obj01);
let obj02 = obj01;
console.log(obj02);

obj02.title = "cs";
console.log(obj01);
console.log(obj02);

// 전개연산자 형식으로 가져와야 원본을 보존한 상태로 가져올 수 있다. 그냥 fruits로 가져왔으면 원본이 수정되는 형식.
const mine = [...fruits];
console.log(mine);

mine[1] = "orange";
console.log(mine);
console.log(fruits);

//객체 프로퍼티, 키, 값
const book = {
  title: "javascript",
  pages: 500,
};
console.log(book);
book.author = "park";
console.log(book);

// 띄어쓰기가 있는 키를 생성하고 싶을 때
book["published date"] = "2023-10";
console.log(book);

// 객체축양법
let user = {
  name: "도레미",
};
user.age = 25;
console.log(user);

// 객체의 키와 value값이 동일할 때 생략해서 쓸 수 있다.
let makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

let user1 = makeUser("홍길동", 24);
console.log(user1);
