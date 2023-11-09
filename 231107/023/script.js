// 1. 색상변경 버튼을 누르면 클릭 이벤트가 실행되는데
// 2. rectangle 안의 배경 스타일이 변경된다.
// 3. 시작과 끝 값에 0이상 255 사이의 랜덤 숫자 값이, 3개 나온다.
// 4. 랜덤으로 나온 숫자를 모아서 스타일을 준다.

const button = document.querySelector(".button");
let rec = document.querySelector(".rectangle");

const onClickButton = () => {
  //trunc는 정수값만 반환한다. 그래서 361을 곱하면 최대 360까지만 나올 수 있다.
  const randomHue = Math.trunc(Math.random() * 321);
  const randomColorStart = `hsl(${randomHue}), 100%, 50%`;
  const randomColorEnd = `hsl(${randomHue + 40}), 100%, 50%`;
  rec.style.setProperty("--start", randomColorStart);
  rec.style.setProperty("--end", randomColorEnd);
};

button.addEventListener("click", onClickButton);
