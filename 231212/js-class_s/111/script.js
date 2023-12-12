const btn = document.querySelector("#btn");
const bodyContent = document.body;
console.log(bodyContent);
const myRequestFullScreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
};

btn.addEventListener("click", () => {
  myRequestFullScreen(bodyContent);
});

const myCancelFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

const btnExit = document.querySelector("#btnExit");
btnExit.addEventListener("click", () => {
  myCancelFullScreen();
});
