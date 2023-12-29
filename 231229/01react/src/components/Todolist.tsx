import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { CreateTodo } from "./CreateTodo";
import { Todo } from "./Todo";
import { toDoSelector, categoryState, Categories } from "./Atoms";

export const Todolist = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Do's</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      {toDos?.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};
