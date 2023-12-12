import React, { useContext, useEffect } from "react";
import { setPageTitle } from "../utill";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";

const Edit = () => {
  const { id } = useParams();
  useEffect(() => {
    setPageTitle(`${id}번 일기 수정하기`);
  }, []);
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onSubmit = (data) => {
    const updateConfirm = window.confirm(
      "일기를 정말 수정할까요? 다시 복구되지 않습니다."
    );
    if (updateConfirm) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
    }
  };
  const onClickDelete = () => {
    const deleteConfirm = window.confirm(
      "일기를 정말 삭제할까요? 다시 복구되지 않습니다."
    );
    if (deleteConfirm) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const data = useDiary(id);
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              onClick={onClickDelete}
              type={"negative"}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
