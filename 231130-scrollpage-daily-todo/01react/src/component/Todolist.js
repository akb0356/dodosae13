import React, { useMemo, useState } from "react";
import "./Todolist.css";
import Todoitem from "./Todoitem";

const Todolist = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.toLowerCase().includes(search));
  };
  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 실행");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = (totalCount = doneCount);
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  });
  const { totalCount, doneCount, notDoneCount } = analyzeTodo();
  return (
    <div className="TodoList">
      <h4>Todo List ✨</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchBar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <Todoitem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
