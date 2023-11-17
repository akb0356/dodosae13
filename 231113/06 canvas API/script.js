// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// arc(x, y, r, 시작각도"래디언", 종료각도"래디언", )

// 반원만들기

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.moveTo(200, 100);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, true);
ctx.closePath();
ctx.stroke();
