function displayHello() {
  console.log("Hello");
}
displayHello();
//js비동기처리방식
//callback 함수 / promise 객체 :: reponse(성공)/ reject(실패), => then() / catch(), finally() / fetch() :: promise(를 반환!)
//async, await
// 함수 앞에 async를 붙이면 비동기처리방식으로 불러올 수 있다.
async function displayHello01() {
  console.log("Hello01");
}
displayHello01();

//# sourceMappingURL=index01.js.map

//promise 객체를 활용한 비동기처리방식 코드

// function whatsYourFavorite() {
//   let fav = "javascript";
//   //promise는 콜백함수를 받고 resolve, reject 두개의 인자값을 받는다.
//   return new Promise((resolve, reject) => resolve(fav));
// }

// function displaySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`hello, ${subject}`));
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

//위 코드를 aysnc와 await 방식으로 변환한다면?
//async :: 무조건 비동기처리 / sync :: 무조건 동기처리방식

async function whatsYourFavorite01() {
  let fav = "Typescript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}
//then을 쓸 수 있는 이유 :: promise 객체가 반환값으로 들어와서
whatsYourFavorite01().then(displaySubject).then(console.log);

async function whatsYourFavorite02() {
  let fav = "Node.js";
  return fav;
}

async function displaySubject01(subject) {
  return `Hello, ${subject}`;
}

//async는 비동기적으로 실행문을 처리하는 함수라고 했다.
// 유의사항 :: 아무리 실행문을 비동기적으로 처리한다고해도, 우선처리 실행해야하는 코드가 있다면, 반드시 해당 실행문을 먼저 처리 후 다음번 코드를 실행하게끔 해야한다.
//await를 쓰면 비동기처리중에서도 순서를 가지게 된다.
// 함수를 먼저 쓴다고 먼저 실행되리라는 법이 없기 때문에 await를 써서 반드시 순서를 정해줘야한다. 때문에 async와 await는 함께 다닌다.
async function init() {
  const response = await whatsYourFavorite02();
  const result = await displaySubject01(response);
  console.log(result);
}

init();
