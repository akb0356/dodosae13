// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

//투명, 불투명도 적용할 수 있는 첫번째 방법
// globalalpha 하면 전체 투명도가 적용된다
// ctx.globalAlpha = 0.3;
// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 50);
// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.fillRect(150, 50, 100, 50);
// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(250, 50, 100, 50);
// ctx.fillStyle = "rgb(255, 255, 0)";
// ctx.fillRect(350, 50, 100, 50);

//두번째 방법
ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(150, 50, 100, 50);
ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
ctx.fillRect(250, 50, 100, 50);
ctx.fillStyle = "rgba(255, 255, 0, 0.7)";
ctx.fillRect(350, 50, 100, 50);
