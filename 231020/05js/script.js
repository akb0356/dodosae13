// 1. input 안에 작성된 내용을 어딘가 담을 수 있는 변수 정의
// 2. 등록버튼의 이벤트를 정의할 수 있도록 조치
// 3. 버튼 클릭시 입력한 내용이 출력될 공간에 대한 정의
// 4. 입력한 내용을 삭제할 수 있는 버튼에 대한 정의
// 5. 현재 변수에 담겨있는 값을 정렬해줘야할 필요성

const form = document.querySelector("form");
const input = document.querySelectorAll("input")[0];
const ul = document.querySelector("ul");

let todos = [];
const save = () => {
  // json :: javascript object notation / 컴퓨터가 인식해서 출력할 수 있는 문자열로 바꿔라.
  localStorage.setItem("todos", JSON.stringify(todos));
};

// 삭제기능 정의
const delItem = (e) => {
  // 선택된 요소의 부모요소를 타겟이라고 정의한 변수에 넣어줘.
  const target = e.target.parentElement;
  // 재할당 :: 위 타겟...을 어딘가 재할당함.
  todos = todos.filter((todo) => todo.id != target.id);
  target.remove();
  save();
};

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input !== "") {
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// 입력값을 li와 span과 button요소로 추가해주는 함수
const addItem = (todo) => {
  if (todo !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    // 일치하는 아이디가 없으면 삭제가 안되니 li태그에 아이디를 부여
    li.id = todo.id;
  }
};

// 실행되는 이벤트를 관리하는 함수
const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  save();
  addItem(todo);
  input.value = "";
};

// 삭제가 되어진 값을 다시금 로컬스토리지에 전달하고싶음
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos !== null) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
} else {
  todos;
  }
};

init();
// 이벤트를 실행시키는 함수
form.addEventListener("submit", handler);

// storage에 값을 저장하는 함수
// // (키, value) 세팅할 때
// localStorage.setItem("hello", "world");
// // 값을 가져올 때
// const myData = localStorage.getItem("hello");
// console.log(myData);