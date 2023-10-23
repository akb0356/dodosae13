const today = new Date();
const hrs = today.getHours();
const container = document.querySelector("#container");

// 이미지 값이 재할당 될 수 있으니 let
let newImg = document.createElement("img");
newImg.src = hrs < 12 ? "/img/morning.jpg" : "/img/afternoon.jpg";
container.appendChild(newImg);
