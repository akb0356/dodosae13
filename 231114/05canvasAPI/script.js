const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//destination
ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

//나중에 만든 소스를 destination에 올려서 살려라
ctx.globalCompositeOperation = "source-over";
//겹치는 부분만 살려라
ctx.globalCompositeOperation = "source-in";
//교차되는 제외 부분만 살려라
ctx.globalCompositeOperation = "source-out";
//교차되는 부분만 살려라
ctx.globalCompositeOperation = "source-atop";
//destination 기준으로도 할 수 있음.
ctx.globalCompositeOperation = "destination-in";
ctx.globalCompositeOperation = "destination-over";
ctx.globalCompositeOperation = "destination-out";
ctx.globalCompositeOperation = "destination-atop";

//라이터효과
ctx.globalCompositeOperation = "lighter";
//나중에 작성된 효과만 살아남는 효과
ctx.globalCompositeOperation = "copy";
//고유색상을 가지고 가면서 겹치는 부분은 뻥 뚫리는 효과
ctx.globalCompositeOperation = "xor";

//source
ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(180, 120, 50, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
