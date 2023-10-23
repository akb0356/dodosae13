const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

// 객체가 하나라서 e를 넣지 않아도 괜찮음.
orderButton.addEventListener("click", () => {
  let newP = document.createElement("p");

  // 어떠한 속성을 만들 때 :: 문서객체에 속성을 생성해라.
  let textNode = document.createTextNode(title.innerText);
  let newImage = document.createElement("img");
  let srcNode = document.createAttribute("src");
  srcNode.value = "/img/에어맥스-97-남성-신발-RZWVeLI8.png";
  // 특정태그안에 속성값을 넣고자 할 때
  newImage.setAttributeNode(srcNode);
  document.body.appendChild(newImage);

  newP.appendChild(textNode);
  newP.style.fontSize = "0.8em";
  newP.style.color = "#00f";
  orderInfo.appendChild(newP);
});
