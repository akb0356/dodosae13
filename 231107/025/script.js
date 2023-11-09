const character = document.querySelector(".character");
console.log(character);

// 원주율이 무엇이냐? 원의 둘레와 원의 지름은 항상 동일한 비율로 움직인다는 것을 정의한 것이로다.
//r: 반지름
//파이:3.14
//2파이r = 원둘레
let degree = 0;
let loop = () => {
  //호도법이 뭐임?
  const rotation = (degree * Math.PI) / 180;
  //우리가 지금 바라보고 있는 화면의 정 가운데의 나누기 2
  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation);

  character.style.top = `${targetY}px`;
  character.style.left = `${targetX}px`;

  degree += 1;

  requestAnimationFrame(loop);
};

loop();
