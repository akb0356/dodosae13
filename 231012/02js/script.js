// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${nowMonth}월 <br/>`);
// document.write(`현재 일 : ${nowDate}일 <br/>`);

// 특정날짜정보가져오기

// Date 값 안에 `백틱을 넣지 않고 넣으면 현재 월 값을 그대로 가지고 와 +1를 하지 않아도 된다. but 거의 안쓰이는 예외사항임.
// let classOpen = new Date(`2023,08,22`);
// let theMonth = classOpen.getMonth() + 1;
// let theDate = classOpen.getDate();

// document.write(`<h1>강의 개강 날짜 정보</h1>`);
// document.write(`현재 월 : ${theMonth}월 <br/>`);
// document.write(`현재 일 : ${theDate}일 <br/>`);

let today = new Date();
let nowYear = today.getFullYear();
let theDate = new Date(nowYear, 11, 31);
console.log(theDate);
let diffDate = theDate.getTime() - today.getTime();
// .ceil 반올림 .floor 소수점 그냥 버리기
let result = Math.floor(diffDate / (60 * 60 * 24 * 1000));
console.log(result);
document.write(`연말 D-DAY : ${result}일 남았습니다.`);
