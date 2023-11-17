// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// // 캔버스 안에서 선을 만들때 반드시 시작하는 것, 지금부터 패스값 쓴다고 선언하는 것.
// ctx.beginPath();
// // x축 50 y축 50 시작점 찍은것.
// ctx.moveTo(50, 50);
// //x로부터 200 y로부터 200까지 이어질 위치지정
// ctx.lineTo(200, 200);
// //그어라 선언하는거.
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
// 더이상 패스 안쓴다 선언하므로 나비를 닫음
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
// ctx.stroke();
//fill 스타일을 지정하지 않으면 무조건 검정
ctx.fillStyle = "rgb(0, 200, 0)";
ctx.fill();
