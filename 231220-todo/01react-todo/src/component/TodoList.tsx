import React from "react";
import styled from "styled-components";
import Todoitem from "./Todoitem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface props {
  //안에 들어오는 요소가 몇개가 될지 모를때 generic 타입을 설정한다.
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const TodoList = ({ toDoList, onDelete }: props) => {
  return (
    <Container>
      {toDoList.map((todo, index) => (
        <Todoitem
          label={todo}
          key={index}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
