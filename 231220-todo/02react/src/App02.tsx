import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Container = styled.div``;

// const H1 = styled.div`
//   color: ${(props) => props.theme.textColor};
// `;

interface DummyProps {
  text: string;
  otherThingHere?: boolean;
}

const Dummy = ({ text, otherThingHere }: DummyProps) => {
  return <h1>{text}</h1>;
};

const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  alert("Hello");
};

function App() {
  return (
    <Container>
      <Dummy otherThingHere={true} text="hello" />
      <button onClick={onClick}>Click Me</button>
    </Container>
  );
}

export default App;
