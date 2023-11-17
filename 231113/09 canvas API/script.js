// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// arc(x, y, r, 시작각도"래디언", 종료각도"래디언", )

// js는 객체지향언어라고 햇죠?

let triangle = new Path2D();

triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

ctx.stroke(triangle);

let circle = new Path2D();
//true는 반시계 시계는 false
circle.arc(200, 155, 50, 0, (Math.PI / 180) * 180 * 2, true);
ctx.fillStyle = "green"
ctx.fill(circle)

