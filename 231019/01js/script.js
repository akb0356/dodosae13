// function greetin() {
//   console.log("안녕하세요.");
// }
// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

let counter = 0
let timer = setInterval(() => {
  console.log("안녕하세요!")
  counter++
  if (counter === 5) {
    clearInterval(timer)
  }
}, 2000)

setTimeout(() => {
  console.log("기다려주세요!")
},3000)