import React, { useState, useRef } from "react";

const Body03 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText();
    }
  };
  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
      <h3></h3>
    </div>
  );
};

export default Body03;
