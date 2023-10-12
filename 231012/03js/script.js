let now = new Date();
let firstDay = new Date(`2023-08-22`);
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

document.querySelector(".accent").innerHTML = passedDay + "일";
// innerhtml 클래스를 찾아서 우항에 있는 값을 할당시켜준다.

// 함수스타일화
// calcDate라는 이름의 함수를 만들고 싶어요.
function calcDate(days) {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerHTML = `${year}년 ${month}월 ${date}일`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
