//header
const header = document.querySelector("header");
const blackBox = document.querySelector(".blackBox");
const mainContentWrap = document.querySelector(".mainContentWrap");
const scrolleffect = document.querySelector(".scrolleffect");

let scrollNum = 0;
let documentHeight = 0;
const coverHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;
  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
    scrolleffect.style.opacity = `${scrollNum / 1000}`;
  } else {
    header.classList.remove("fixed");
    blackBox.style.backgroundColor = `rgba(0, 0, 0, ${scrollNum / 1000})`;
    blackBox.style.zIndex = `${scrollNum / 1000}`;
    scrolleffect.style.opacity = `${1 - scrollNum / 1000}`;
  }
});
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

