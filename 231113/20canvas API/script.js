// 안타깝게도 canvas api 기본적으로 탑재가 되어있는 도형은 사각형뿐이다. 삼각형, 원은 커스터마이징 필요!

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

// const lineCap = ["butt", "round", "square"];
// //이터러블객체 안에 있는거 반복해서 뽀ㅃ아낸다
// for (let i = 0; i < lineCap.length; i++) {
//   ctx.strokeStyle = "#222";
//   ctx.lineWidth = 15;
//   //line의 끝부분을 어떻게 처리할거냐
//   ctx.lineCap = lineCap[i];
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + 1 * 30);
//   ctx.lineTo(350, 50 + 1 * 30);
//   ctx.stroke();
// }

const lineJoin = ["bevel", "miter", "round"];
ctx.strokeStyle = "#222";
for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.stroke();
}
