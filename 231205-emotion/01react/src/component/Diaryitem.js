import React from "react";
import "./Diaryitem.css";
import { getEmotionImgById } from "../utill";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Diaryitem = ({ id, date, emotionId, content }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const emotionStyle = ["img_section", `img_section_${emotionId}`];
  const DiaryDate = new Date(parseInt(date));
  const editedContent = content.slice(0, 25);
  return (
    <div className="DiaryItem">
      <div className={emotionStyle.join(" ")} onClick={goDetail}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${id}`} />
      </div>
      <div className="info_section" onClick={goDetail}>
        <div className="date_wrapper">{DiaryDate.toLocaleString()}</div>
        <div className="content_wrapper">{editedContent}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(Diaryitem);
