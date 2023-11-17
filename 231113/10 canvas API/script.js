// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

//귀여운 개구리 만들기

ctx.fillStyle = "green";
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.scale(1, 0.7);
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(120, 80, 25, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 25, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(120, 80, 15, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 15, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(140, 130, 2, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(140, 130, 2, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 180, false);
ctx.lineWidth = 5;
ctx.stroke();
