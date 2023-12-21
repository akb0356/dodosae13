import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
  border-radius: 200px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  text = "default text",
  borderColor,
  bgColor,
}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  return (
    <Container borderColor={borderColor ?? bgColor} bgColor={bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
