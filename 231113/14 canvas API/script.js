// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

let img = new Image();

img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = "../images/bird.jpg";

ctx.beginPath();
ctx.arc(300, 200, 150, 0, (Math.PI / 180) * 180 * 2, false);
ctx.clip();
