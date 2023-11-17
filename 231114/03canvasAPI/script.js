const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);
ctx.save();

// x축의 값의 배수를 3배수로 가고 y좌표에 있는 값을 2배수로 바꾸겠다.(이로서 비율 변경!)
ctx.scale(3, 2);
// 60이 띄어짐 140이 띄어진거임 100을 주기로 했는데 3배수 되어야하니 300 50을 주기로 했는데 2배율이 되어 100이 됨. 스케일값을 주면 모든 값에 3배 2배수 값을 받아감.
ctx.strokeRect(20, 70, 100, 50);
// //scale 값을 여기까지만 쓰고싶어 할 때 다시 restore
ctx.restore();

ctx.strokeRect(200, 50, 100, 50);
