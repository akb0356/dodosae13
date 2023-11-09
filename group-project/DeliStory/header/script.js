/*header*/
const trigger = document.querySelector(".trigger");
const dropmenu = document.querySelector(".dropmenu");
const header = document.querySelector("header");
const imgElement = document.querySelector("#logo");

trigger.addEventListener("click", (e) => {
  trigger.classList.toggle("active");
  dropmenu.classList.toggle("drop");
  // 추가
  if (dropmenu.classList.contains("drop")) {
    setTimeout(() => {
      imgElement.src = `./logo/logo-white.svg`;
    }, 300);
  } else if (header.classList.contains("sticky")) {
    imgElement.src = `./logo/logo-white.svg`;
  } else {
    imgElement.src = `./logo/logo.svg`;
  }
});

/*sticky*/

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
  //추가
  if (header.classList.contains("sticky")) {
    imgElement.src = `./logo/logo-white.svg`;
  } else {
    imgElement.src = `../logo/logo.svg`;
  }
});
