const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// rotate() 회전시키기
// js 각도는 반드시 호도법을 사용

// 이렇게 쓰면 기준점이 설정되지 않아 원래 00 에서 ROTATE가 되어 우리가 원하는 방향이 안나온다
// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

// ctx.rotate((45 * Math.PI) / 180);
// ctx.strokeRect(100, 100, 100, 100)

// translate로 시작값을 정의해주면서 우리가 원하는 이미지가 나온다.
ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);
ctx.translate(150, 150);

ctx.rotate((45 * Math.PI) / 180);
ctx.strokeRect(0, 0, 100, 100);
// 바꾸지 않으면 최초의 중심축이 아니라 150 150 바뀐 지점에서 로테이트 돌아감. 때문에 중심축을 바꾸고 다시 원점으로 돌리는 방법도 존재한다.
// ctx.translate(-150, -150);
