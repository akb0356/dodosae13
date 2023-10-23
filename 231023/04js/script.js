// 1. 첫번째 수 안에 들어온 값을 정의
// 2. 두번째 수 안에 들어온 값을 정의
// 3. 1번과 2번 들어온 값으로 최대공약수를 계산할 함수 만들기
// 4. 계산된 결과값을 계산하기 버튼이 클릭되면 결과 값 칸에 값을 전달하기.

const f = document.querySelector("#number1");
const s = document.querySelector("#number2");
const button = document.querySelector("button")
const result = document.querySelector(".result")

const getGCD = (f, s) => {
  let max = f > s ? f : s;
  let GCD = 0
  for(let i = 0; i <= max; i++) {
    if (f % i === 0 && s % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

button.onclick = () => {
  result.innerText = getGCD(f.value, s.value)
}