// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
};
img.src = "../images/cat.jpg";
