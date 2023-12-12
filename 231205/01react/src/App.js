import "./App.css";
import React, { useState, useReducer, useRef, useEffect } from "react";
import { Routes, Route, json } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const mockData = [
  {
    id: "mock1",
    date: new Date("2023/12/02/10:20:00").getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date("2023/12/10/14:10:20").getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date("2023/12/19/17:24:20").getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      const newState = [action.data, ...state];
      // localstorage는 절대 원본데이터가 못간다. 오직 문자열만 보낼 수 있다.
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (it) => String(it.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};
//원본데이터 전달값
export const DiaryStateContext = React.createContext();
//함수전달값
export const DiaryDispatchContext = React.createContext();
function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (!localData.length === 0) {
      setIsDataLoaded(true);
    }
    idRef.current += localData[0].id + 1;
    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []);
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date().getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date().getTime(),
        content,
        emotionId,
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
