// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// arc(x, y, r, 시작각도"래디언", 종료각도"래디언", )

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

// 패스값 시작 선언

ctx.beginPath();
// 시작 x와 y값, 반지름 100, 시작각도 0도에서부터 360도까지 (이렇게 원을 만든다.)
// 1라디언 = 파이 / 180 이니깐 (파이 / 180도) * 180 = 파이
ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
//선언하고 반드시 패스 닫고
ctx.closePath();
// 채울지 stroke로 채울지 선언해줘야한다.
ctx.fill();
ctx.stroke();
