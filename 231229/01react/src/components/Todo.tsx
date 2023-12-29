import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, toDoState, Categories } from "./Atoms";

// [
//   {
//       "id": 1703816308858,
//       "text": "5",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816308442,
//       "text": "4",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816307601,
//       "text": "3",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816306762,
//       "text": "2",
//       "category": "TO_DO"
//   },
//   {
//       "id": 1703816305659,
//       "text": "1",
//       "category": "TO_DO"
//   }
// ]

export const Todo = ({ text, category, id }: ITodo) => {
  const setToDos = useSetRecoilState(toDoState);
  //react에서 버튼 클릭 참조변수에 대한 이벤트 타입은 리액트 안의 마우스 이벤트 안의 버튼요소.<< 이것뿐
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("I wanna go", event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ""} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ""} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ""} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};
