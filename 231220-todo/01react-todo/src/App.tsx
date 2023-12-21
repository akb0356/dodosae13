import React from "react";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Dataview from "./component/Dataview";
import InputContainer from "./component/InputContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #eee;
`;

const mockUp = ["리액트 공부하기", "운동하기", "책읽기"];
function App() {
  const [toDoList, setTodoList] = useState(mockUp);
  const [toDo, setTodo] = useState("");
  const onDelete = (todo: string) => {
    setTodoList(toDoList.filter((item) => item !== todo));
  };
  const onAdd = (todo: string) => {
    if (toDo === "") return;
    setTodoList([...toDoList, toDo]);
    setTodo("");
  };
  return (
    <Container>
      <Dataview toDoList={toDoList} onDelete={onDelete} />
      <InputContainer toDo={toDo} setTodo={setTodo} onAdd={onAdd} />
    </Container>
  );
}

export default App;
