let newP = document.createElement("p");
// 노드 안에 텍스트를 넣고 싶을 때 사용
let textNode = document.createTextNode("Typescript");

// newp노드에 textnode가 자식요소로 추가된것이다.
newP.appendChild(textNode);
document.body.appendChild(newP);
