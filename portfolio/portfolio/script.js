//header
const header = document.querySelector("header");
const blackBox = document.querySelector(".blackBox");
const mainContentWrap = document.querySelector(".mainContentWrap");

let scrollNum = 0;
let documentHeight = 0;
const coverHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;
  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
    blackBox.style.display = "none";
    blackBox.style.zIndex = "-555";
  } else if (scrollNum <= coverHeight) {
    header.classList.remove("fixed");
    blackBox.style.display = "block";
    blackBox.style.zIndex = "555";
    blackBox.style.backgroundColor = `rgba(0, 0, 0, ${scrollNum / 1000})`;
  }
  if (scrollNum < coverHeight) {
    blackBox.style.display = "none";
    blackBox.style.zIndex = ""; // 또는 다른 원하는 값으로 설정
  }
});
