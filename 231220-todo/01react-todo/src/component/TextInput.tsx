import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2rem;
  padding: 4px;
  border: none;
  border-bottom: 1px solid #222;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

interface props {
  value: string;
  onChange: (toDo: string) => void;
}

const TextInput = ({ value, onChange }: props) => {
  // onchange가 실행되면 App에 들어있는 setTodo가 실행되는것임.
  return (
    <Input
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
};

export default TextInput;
