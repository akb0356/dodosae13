import "./App.css";
import { useState, useRef } from "react";
import Header from "./component/Header";
import Todoeditor from "./component/Todoeditor";
import Todolist from "./component/Todolist";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  const onUpdate = (targetId) => {
    setTodo(
      //if문 활용했을 때때
      // todo.map((it) => {
      //   if (it.id === targetId) {
      //     return { ...it, isDone: !it.isDone };
      //   } else {
      //     return it;
      //   }
      // })
      //삼항조건을 사용했을 때
      todo.map((it) => (it.id === targetId ? { ...it, isDone: !it.isDone } : it))
    );
  };
  const onDelete = (targetId) => {
    // js에서 삭제기능은 대부분 filter
    //map은 앞에 있는 객체의 아이템을 끌고와서 반복하는것 filter는 찾아오지만 callback 함수의 참인 애들만 반복시킨다.
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  return (
    <div className="App">
      <Header />
      <Todoeditor onCreate={onCreate} />
      <Todolist todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
