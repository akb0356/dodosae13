// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// arc(x, y, r, 시작각도"래디언", 종료각도"래디언", )

// // 타원만들기
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.scale(1, 0.7);
ctx.arc(200, 150, 80, 0, (Math.PI / 180) * 180 * 2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, (Math.PI / 180) * 180 * 2, false);
ctx.closePath();
ctx.stroke();
