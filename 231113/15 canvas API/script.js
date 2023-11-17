// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(310, 100);
ctx.lineTo(120, 250);
ctx.lineTo(190, 30);
ctx.lineTo(280, 250);
ctx.lineTo(80, 100);

// ctx.closePath();
ctx.stroke();
