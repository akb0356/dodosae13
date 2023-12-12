import "./App.css";
import Viewer from "./component/Viewer";
import { useState, useRef, useEffect } from "react";
import Controller from "./component/Controller";
import Even from "./component/Even";

function App() {
  //홑태그(*싱글태그) :: 여는 태그에 닫는 태그까지 같이 입력한 경우
  //쌍태그(*멀티태그):: 우리가 아는 그거
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  //useRef 할당되면 객체가 할당된다.
  // const didMountRef = useRef(false);
  // useEffect(() => {
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log("컴포넌트업데이트");
  //   }
  // });
  // //탄생이 되는 시점에만 실행
  // useEffect(() => {
  //   console.log("컴포넌트 마운트");
  // }, []);
  // //죽음의 시점실행
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("클린업");
  //     clearInterval(intervalId);
  //   };
  // });
  // 단락회로평가라고 부른다. :: 좌항의 값이 참이면 우항을 실행해라.
  //        {count % 2 === 0 && <Even />}

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
