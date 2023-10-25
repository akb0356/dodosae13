window.onload = function () {
  const bgCount = 5;
  // 같은 방법
  // let randomNumber = Math.ceil(Math.random() * bgCount);
  let randomNumber = Math.floor(Math.random() * bgCount) + 1;
  document.body.style.backgroundImage = `url(../imgs/bg-${randomNumber}.jpg)`;
};
