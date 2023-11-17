// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

//귀여운 개구리 만들기
ctx.font = "italic 60px serif";
ctx.fillText("javascript", 50, 70);
ctx.font = "bold 60px sans-serif";
ctx.strokeText("javascript", 50, 150);
