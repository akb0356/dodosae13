import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Circle from "Circle";
import App01 from "App01";

function App() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(event.currentTarget.value);
  };
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
      <form>
        <input
          value={value}
          placeholder="user name"
          type="text"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default App;
