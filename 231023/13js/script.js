const buttons = document.querySelectorAll("p > span")
// buttons 안에 button을 하나하나 넣겠다는 의미? let으로 선언해줘야함
// 노드 안의 값을 가져오려고 선언한것이기 때문에 배열 안에 있는 아이템을 끌고 와야함.

for(let button of buttons) {
  button.addEventListener("click", function() {
    this.parentNode.remove(this)
  })
}