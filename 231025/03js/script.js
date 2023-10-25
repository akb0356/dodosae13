// 1. 사용자가 입력하는 전체명
// 2. 사용자가 입력하는 필요명
// 3. 추첨하기를 누르면 랜덤돌리기. 
// 4. 결과값을 result에 출력시킨다.
// 5. 지우기를 누르면 리셋이 된다.
// 6. 랜덤넘버 출력 / 근데 겹치는 숫자가 있으면 안됨 
// 어떻게 받은 seed값이랑 total에서 숫자를 제한해서 겹치치않는 숫자를 뽑아내? 

const seed = document.querySelector("#seed");
const total = document.querySelector("#total");
const raffle = document.querySelector("#raffle");
const clear = document.querySelector("#clear");
const result = document.querySelector("#result");

raffle.addEventListener("click", (e) => {
  e.preventDefault()
let winner = ""
  for (let i = 0; i < total.value; i++) {
    let picked = Math.floor(Math.random()*seed.value+1)
    winner += `${picked}번,`
  }
  result.innerText = `선발된 팀원 : ${winner}`
})

const bgCount = ${seed}
