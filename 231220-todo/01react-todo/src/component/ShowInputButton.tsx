import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface props {
  show: boolean;
  onClick: () => void;
}

const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

const ShowInputButton = ({ show, onClick }: props) => {
  return (
    <Container>
      <Button
        label={show ? "목록" : "Todo 추가"}
        onClick={onClick}
        color={show ? "#304ffe" : undefined}
      />
    </Container>
  );
};

export default ShowInputButton;
