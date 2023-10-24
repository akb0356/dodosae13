// 1. 제목과 저자 영역에 값을 넣고 저장하기를 누르면 샘플이라고 되어있는 영역에 해당 값이 출력된다.
// 2. 출력된 값 오른쪽에 삭제 버튼이 생성되어야한다.
// 3. 삭제버튼을 클릭했을 경우 해당 요소가 삭제되어야한다.

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
// 저장한 내용을 입력할 곳을 끌어온다.
const bookList = document.querySelector("#bookList");

// form submit은 서버에 해당 값을 보내고자 하는 특성이 있다.
save.addEventListener("click", (e) => {
  // 그래서 바로 보내지 못하게 멈추라고 시켜야한다.
  e.preventDefault();
  // li라는 요소를 생성해서 item에 담았다.
  const item = document.createElement("li");
  // innertext는 텍스트화한 값을 가져오는데 우리는 스타일화한 값도 넣고 싶으니 html로 끌고온다.
  // 여기선 이미 save라는 버튼을 눌렀기 때문에 .value 값을 끌고 올 수 있다.
  item.innerHTML = `
  ${title.value} - ${author.value}
  <span class="delButton">삭제</span>`;
  bookList.appendChild(item);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeItem);
  }
});

// removeitem은 호이스팅이 불가능해 화살표 함수를 쓰고 싶었다면 위에서 먼저 선언을 했을 것, 먼저 선언을 하지 못한 이유는 삭제라는 버튼을 누른다는 것은 선택된 요소의 부모 요소를 찾아 자녀요소를 타고 내려와야하는데 그러려면 this 객체를 찾아야함, 하지만 this는 화살표함수를 쓸 수 없기 때문에 그냥 아래에서 일반 함수를 쓰는 것.
function removeItem() {
  // 선택된 span의 부모요소(ul)을 끌고와.
  let list = this.parentNode;
  // 선택된 부모 요소의 list라는 자식요소를 지운다.
  list.parentNode.removeChild(list);
}
