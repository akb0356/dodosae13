// 1. 사용자가 연도를 입력한 값
// 2. 사용자가 월을 입력한 값
// 3. 사용자가 일을 입력한 값
// 4. 버튼을 누르면 저장
// 5. 오늘 날짜 - 사용자가 입력한 날짜 계산
// 6. 결과값을 result에 보냄

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultYears = document.querySelector("#years");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월  ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분`;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );
  let passed = today.getTime() - birthDay.getTime();
  //1000 1초 60초 1분 60분 1시간 24시간 1일 12개월 1년
  let passedYear = Math.floor(passed / (1000 * 60 * 60 * 24 * 30 * 12));
  resultYears.innerText = `내가 태어난지 ${passedYear}년`
});
