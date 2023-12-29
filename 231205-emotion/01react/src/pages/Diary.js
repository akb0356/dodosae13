import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import { getFormattedDate, setPageTitle } from "../utill";
import Viewer from "../component/Viewer";

const Diary = () => {
  const { id } = useParams();
  useEffect(() => {
    setPageTitle(`감정일기장 ${id}번`);
  }, []);
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/:${id}`);
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const DiaryDate = new Date(Number(date));
    const title = `${getFormattedDate(DiaryDate)} 기록`;
    return (
      <div>
        <Header
          leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
          title={title}
          rightChild={
            <Button type={"positive"} text={"수정하기"} onClick={goEdit} />
          }
        />
        <Viewer emotionId={emotionId} content={content} />
      </div>
    );
  }
};

export default Diary;
