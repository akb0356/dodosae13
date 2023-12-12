import "./DiaryList.css";
import React, { useState, useEffect } from "react";
import { sortOptionList } from "../utill";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Diaryitem from "./Diaryitem";

const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(a.date) - Number(b.date);
      } else {
        return Number(b.date) - Number(a.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const onClickNew = () => {
    navigate("/new");
  };
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button
            text={"새 일기 쓰기"}
            onClick={onClickNew}
            type={"positive"}
          />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((it) => (
          <Diaryitem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
