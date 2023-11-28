//마우스가 이동하게 되었을 때 mouseevent 처리
// 출력되는 값 =>
//clientX, clientY :: 현재 내가 보고있는 웹브라우저 화면안에서의 좌표값
// 현재 내가 작업중인 문서가 싱글모니터 안에서 모든게 해결되고 있는 상황!
// pageX, pageY :: 만약 내가 현재 작업중인 문서의 높이값이 5000px이라면 현재 내 눈에 보이지 않는 영역까지 좌표값을 찾아와주는 값
// screenX, screenY :: 만약 내가 현재 듀얼모니터를 사용중이라면, 첫번째 메인 모니터의 좌측 상단값을 0, 서브모니터의 좌측상단값은 메인모니터의 좌표값
//finalportfolio 홈페이지를 화려하게?

const h1 = document.querySelector("h1");
const box = document.querySelector(".box");
// 목표지점 => 마우스를 어딘가로 이동했을 때의 그 지점
let x = 0;
let y = 0;

//타켓지점 => 목표지점을 향해서 따라가는 해당 아이템의 지점
let targetX = 0;
let targetY = 0;

//속도
let speed = 0.0005;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  h1.innerText = `X: ${e.pageX}, Y: ${e.pageY}`;
  // box.style.top = y - 30 + "px";
  // box.style.left = x - 30 + "px";

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;
    box.style.top = targetY - 30 + "px";
    box.style.left = targetX - 30 + "px";
    window.requestAnimationFrame(loop);
  };
  loop();
});
