const mobGnbDrop = document.querySelectorAll(".gnb-listbox-title");
const mobGnbTitles = document.querySelectorAll(
  ".gnb-listbox-title > .title > h1"
);
const mobGnbLists = document.querySelectorAll(".gnb-list-detail");
const mobGnbDropIcons = document.querySelectorAll(
  ".gnb-listbox-title .dropicon"
);

mobGnbLists.forEach((list) => {
  list.style.height = "0";
  list.style.display = "none";
});
mobGnbTitles.forEach((title) => {
  title.style.color = "rgb(51,51,51)";
});
mobGnbDropIcons.forEach((icon) => {
  icon.style.transform = "rotate(0deg)";
});

mobGnbDrop.forEach((drop, index) => {
  drop.addEventListener("click", () => {
    const currentListHeight = mobGnbLists[index].style.height;
    const currentListDisplay = mobGnbLists[index].style.display;
    const currentTitleColor = mobGnbTitles[index].style.color;
    const currentDropIcon = mobGnbDropIcons[index].style.transform;

    mobGnbLists[index].style.height =
      currentListHeight === "0px" ? "initial" : "0px";
    mobGnbLists[index].style.display =
      currentListDisplay === "none" ? "block" : "none";
    mobGnbTitles[index].style.color =
      currentTitleColor === "rgb(51, 51, 51)"
        ? "rgb(249, 187, 0)"
        : "rgb(51, 51, 51)";
    mobGnbDropIcons[index].style.transform =
      currentDropIcon === "rotate(0deg)" ? "rotate(-180deg)" : "rotate(0deg)";
  });
});

/* Top slide */

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

/* touchtab */
const plusone = () => {
  document
    .querySelector("#contentframe")
    .setAttribute("src", "/product/plusone.html");
  document.querySelector("#plusone").style =
    "background: #f9bb00; color: #fff;";
  document.querySelector("#plustwo").style = "background: none; color: #999;";
  document.querySelector("#plusnew").style = "background: none; color: #999;";
};
const plustwo = () => {
  document
    .querySelector("#contentframe")
    .setAttribute("src", "/product/plustwo.html");
  document.querySelector("#plustwo").style =
    "background: #f9bb00; color: #fff;";
  document.querySelector("#plusone").style = "background: none; color: #999;";
  document.querySelector("#plusnew").style = "background: none; color: #999;";
};
const plusnew = () => {
  document
    .querySelector("#contentframe")
    .setAttribute("src", "/product/plusnew.html");
  document.querySelector("#plusnew").style =
    "background: #f9bb00; color: #fff;";
  document.querySelector("#plusone").style = "background: none; color: #999;";
  document.querySelector("#plustwo").style = "background: none; color: #999;";
};
