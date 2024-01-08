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
// window.addEventListener("load", () => {
//   window.scrollTo(0, 0);
// });
<<<<<<< HEAD


// swiper
// const PusblishSwiper = new Swiper(".publish", {
//   wrapperClass: "publish-wrapper",
//   slideClass: "magazine-swiper-slide",
//   loop: false,
//   parallax: true,
//   slidesPerView: 3,
//   initialSlide: 1,
//   slidesPerGroup: 1,
//   spaceBetween: 10,
//   autoplay: false,
//   observer: true,
//   observeParents: true,
//   preventClicks: true,
//   preventClicksPropagation: false,
//   navigation: {
//     nextEl: ".magazine-swiper-button-next",
//     prevEl: ".magazine-swiper-button-prev",
//   },
//   breakpoints: {
//     300: {
//       slidesPerView: 2.5,
//       slidesPerGroup: 1,
//       spaceBetween: 8,
//     },
//     640: {
//       slidesPerView: 2.5,
//       slidesPerGroup: 1,
//       spaceBetween: 8,
//     },
//     744: {
//       slidesPerView: 2.5,
//       slidesPerGroup: 1,
//       spaceBetween: 8,
//     },
//     968: {
//       slidesPerView: 3,
//       slidesPerGroup: 1,
//     },
//     1024: {
//       slidesPerView: 3,
//       slidesPerGroup: 3,
//       spaceBetween: 10,
//     },
//   },
// });
=======
>>>>>>> 0b34d08166c73df2f441fbe06125659435b34cee
