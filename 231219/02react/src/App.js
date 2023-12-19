import "./App.css";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: ${(props)=>props.}
`;
const Box = styled.div`
  background: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button``;

const Input = styled.input.attrs({ required: true })`
  background: tomato;
  border: none;
`;

const Emoji = styled.span``;

const RotationAni = keyframes`
0% {
transform: rotate(0deg);
}
50% {
transform: rotate(360deg);
border-radius:50%;
background:skyblue;
}
100% {
  transform: rotate(0deg);
  }
`;

const Box2 = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: teal;
  ${Emoji} {
    font-size: 50px;
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
  animation: ${RotationAni} 5s ease-in-out infinite;
`;

function App() {
  return (
    <Container>
      <Box bgColor="yellow" />
      <Circle bgColor="tomato" />
      <Input />
      <Input />
      <Btn>Login</Btn>
      <Box2>
        <Emoji>🥸</Emoji>
        <Emoji>🥸</Emoji>
      </Box2>
      <Title>Hello React</Title>
    </Container>
  );
}

export default App;
