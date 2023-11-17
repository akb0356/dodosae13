// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
linGrad.addColorStop(0, "#000");
linGrad.addColorStop(0.5, "#fff");
linGrad.addColorStop(1, "#eee");

ctx.fillStyle = linGrad;
ctx.fillRect(0, 0, 100, 200);
