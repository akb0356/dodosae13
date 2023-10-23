// 노드의 위치를 변경하여 삽입하고 싶을 때
// let tsNode = document.createElement("p");
// let tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// let basisNode = document.querySelectorAll("p")[0];
// // insertBefore(넣고싶은 요소, 넣고싶은 영역)
// document.body.insertBefore(tsNode, basisNode);

// // node의 특정 값을 삭제하고 싶을 때
// let heading = document.querySelector("h1");
// heading.remove();

// // h1이 클릭하면 사라지게 하고 싶을 때.
// const title = document.querySelector("h1");
// title.addEventListener("click", () => {
//   title.remove();
// });

// // 현재 노드의 상위 노드를 챙겨오고 싶을 때 .parentNode
// let parent = document.querySelector("h1").parentNode;

const items = document.querySelectorAll("li");
// items는 li태그 3개가 배열로 들어와있다. 그 각각의 요소를 가져와 반복실행해주겠다는 의미
for (item of items) {
  item.addEventListener("click", function () {
    // this 함수는 화살표로 못쓴다.
    // 선택한 부모요소가 가진 해당 자식 요소가 지워지게끔 하는 태그 
    this.parentNode.removeChild(this);
  });
}
