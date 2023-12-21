import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fffacd;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  Button {
    border: none;
    width: 40%;
    height: 200px;
    border-radius: 5px;
    background: #a3e111;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 3px;
    color: black;
    word-break: keep-all;
  }
  Button:hover {
    background: #49b004;
    color: white;
  }
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  // 비효율끝판왕이에용
  // const handleClickButtonA = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else if (type === "JP") {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNumber(questionNumber + 1);
  // };
  // const handleClickButtonB = (num, type) => {
  //   setQuestionNumber(questionNumber + 1);
  // };

  const handleClickButton = (num, type) => {
    const newScore = totalScore.map((s) =>
      s.id == type ? { id: s.id, score: s.score + num } : s
    );
    console.log(newScore);
    setTotalScore(newScore);

    if (QuestionData.length !== questionNumber + 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  return (
    <Wrapper>
      <ProgressBar
        variant="success"
        animated
        now={(questionNumber / QuestionData.length) * 100}
      />

      <ButtonGroup>
        <Title>{QuestionData[questionNumber].title}🥸</Title>
        <Button
          onClick={() =>
            handleClickButton(1, QuestionData[questionNumber].type)
          }
        >
          {QuestionData[questionNumber].answera}
        </Button>
        <Button
          onClick={() =>
            handleClickButton(0, QuestionData[questionNumber].type)
          }
        >
          {QuestionData[questionNumber].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;
