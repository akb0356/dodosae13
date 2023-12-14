import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

//redux에서 dispatch 함수를 통해서 전달되는 값이 있는데.
// 1. type : case
// 2. payload : Function의 parameter(*매개변수) 값 => optional 값(있어도 없어도 그만)
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };
  const loginInfo = () => {
    dispatch({ type: "LOGIN", payload: { id: "minju", password: "123" } });
  };
  return (
    <div className="App">
      <h1>
        {id} {pw}
      </h1>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={loginInfo}>Login</button>
      <button onClick={decrease}>-</button>
      <Box />
    </div>
  );
}

export default App;
