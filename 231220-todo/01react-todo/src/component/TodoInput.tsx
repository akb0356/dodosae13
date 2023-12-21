import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import styled from "styled-components";
import Title from "./Title";

interface props {
  toDo: string;
  setTodo: (todo: string) => void;
  onAdd: (todo: string) => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 20vh;
  padding: 30px;
  margin: 300px auto;
  background: white;
  border-radius: 8px;
  z-index: 1;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const TodoInput = ({ toDo, setTodo, onAdd }: props) => {
  const onAddTodo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setTodo("");
  };
  return (
    <Container>
      <Background>
        <Contents>
          <Title label="Todo 추가 ✏️" />
          <InputContainer>
            <TextInput value={toDo} onChange={setTodo} />
            <Button label="추가" color="#304ffe" onClick={onAddTodo} />
          </InputContainer>
        </Contents>
      </Background>
    </Container>
  );
};

export default TodoInput;
