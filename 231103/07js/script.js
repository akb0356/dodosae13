// let displayHello = () => {
//   console.log("hello");
// };
// displayHello();

//async 함수

// async function displayHello01() {
//   console.log("Hello");
// }
// displayHello01();

// function whatsYourFavorite() {
//   let fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// }
// function displaySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// }
// whatsYourFavorite().then(displaySubject).then(console.log);

//async 활용
async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}
async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  // await는 첫번째 끝나지 않으면 뒤에서 대기하고 있으라는 함수. 때문에 async는 await와 함께 움직인다. 반드시!
  const reponse = await whatsYourFavorite();
  const result = await displaySubject(reponse);
  console.log(result);
}
init();

// whatsYourFavorite().then(displaySubject).then(console.log);
