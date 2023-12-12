import React from "react";
import "./Todoitem.css";

const Todoitem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
  //바로 input tag 안에 onUpdate를 넣으면 선택 여부와 상관없이 가상 돔이 생성되면서 동시에 돌아간다. 때문에 클릭하면 실행될 onChangeCheckbox라는 함수를 따로 생성하고 그 함수 안에 onUpdate를 넣어주었다. (안의 값으로는 id를 넣음!)
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="Todoitem">
      <div className="checkBox_col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default Todoitem;
