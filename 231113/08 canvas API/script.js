// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// arc(x, y, r, 시작각도"래디언", 종료각도"래디언", )

//베지에

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

//3차베지에

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.stroke();

