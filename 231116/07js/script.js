// const ul = document.querySelector("ul");
// // 빈 객체를 의미.
// const fragment = document.createDocumentFragment();
// console.log(fragment);
// const nine = 9;
// for (let i = 0; i < nine; i++) {
//   const createBox = document.createElement("li");
//   fragment.appendChild(createBox);
// }
// ul.appendChild(fragment);

const staggerWrap = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allEl = row * col;

for (let i = 0; i < allEl; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}
staggerWrap.appendChild(fragment);

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 5], from: "center", axis: "z" }),
});

const tl = anime.timeline({
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "z" }),
  loop: true,
  direction: "alternate",
});

tl.add({
  scale: [
    {
      value: 0.1,
      easing: "easeOutSine",
      duration: 500,
    },
    {
      value: 1,
      easing: "easeOutSine",
      duration: 500,
    },
  ],
}).add({
  translateX: anime.stagger(10, { grid: [5, 9], from: "center", axis: "x" }),
  translateY: anime.stagger(10, { grid: [5, 9], from: "center", axis: "y" }), 
  rotate: 
});
