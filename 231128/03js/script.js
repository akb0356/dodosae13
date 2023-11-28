// 목표지점에 대한 정의
let x = 0;
let y = 0;

// 타겟지점에 대한 정의
let targetX = 0;
let targetY = 0;

//속도정의
const speed = 0.1;

//dom에서 찾아와야하는 값들의 정의
const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");
buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    circle.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", (e) => {
    circle.style.transform = "scale(1)";
  });
});
window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  window.requestAnimationFrame(loop);
};
loop();
