// 로또는 6개의 숫자가 나와야한다.
// 6개중 동일한 숫자는 없다
// 로또는 1부터 45안의 숫자에서만 추첨이 된다.

const button = document.querySelector("button");
const result = document.querySelector("#result");
// const digitCount = 6
// const maxNumber = 45
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
// 1부터 45까지의 숫자만 허용
// 허용된 숫자 중 중복되지 않은 총 6개의 숫자가 추첨되어야한다.
// 언제 숫자가 추첨되어야하는가? (버튼을 누르면!)
// 생성된 숫자는 어디에 출력되어야하는가

//버튼을 클릭했을 때 이벤트 작동
button.addEventListener("click", (e) => {
  e.preventDefault();
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber + 1));
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `중복숫자 발생 재추첨 하겠습니다.`;
  }
});
