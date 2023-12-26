import React from "react";
import styled from "styled-components";
import "./App.css";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.111);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 4px rgba(56, 75, 125, 0.1),
    0 10px 20px rgba(56, 75, 125, 0.111);
  place-self: center;
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1.5, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

const BoxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 2,
    },
  },
};
const CircleVariants = {
  start: { opacity: 0, y: -200 },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      <Box variants={BoxVariants} initial="start" animate="end">
        <Circle variants={CircleVariants} initial="start" animate="end" />
        <Circle variants={CircleVariants} initial="start" animate="end" />
        <Circle variants={CircleVariants} initial="start" animate="end" />
        <Circle variants={CircleVariants} initial="start" animate="end" />
      </Box>
    </Wrapper>
  );
}

export default App;
