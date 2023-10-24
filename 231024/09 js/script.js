let today = new Date();
let result = document.querySelector("#result");
let classDay = new Date("2023-08-22");
// toDateString() 은 date에서 날짜 부분만 표시할 때 사용하는 메서드
let passedTime = today.getTime() - classDay.getTime();
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

result.innerText = passedDay;
