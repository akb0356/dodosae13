import React from "react";
import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 500px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 32px;
  border-radius: 8px;
`;

interface props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const Dataview = ({ toDoList, onDelete }: props) => {
  return (
    <div>
      <Container>
        <Title label="할 일 목록📆" />
        <TodoList toDoList={toDoList} onDelete={onDelete} />
      </Container>
    </div>
  );
};

export default Dataview;
