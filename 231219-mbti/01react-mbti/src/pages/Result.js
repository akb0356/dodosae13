import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/data/resultdata";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 80vh;
  letter-spacing: 3px;
  text-align: center;

  button {
    border: none;
    border-radius: 5px;
    background: #a3e111;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 3px;
    color: black;
  }
  button:hover {
    background: #49b004;
    color: white;
  }
`;

const Header = styled.div`
  font-size: 40px;
  width: 100%;
  height: 10vh;
  background: #f27935;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  letter-spacing: 3px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  width: 70%;
  font-size: 20px;
  font-weight: 550;
  margin-bottom: 20px;
  text-align: center;
  word-break: keep-all;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 40px;
  border: 5px solid #a3e111;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 350px;
    object-fit: cover;
  }
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const RetryTest = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);
  return (
    <Container>
      <Header>예비 집사 판별기🐈</Header>
      <Wrapper>
        <Title>예비 집사님과 찰떡궁합인 고양이는🥸 {resultData.name}</Title>
        <LogoImage>
          <img src={resultData.image} />
        </LogoImage>
        <Desc
          style={{
            fontFamily: "sans-serif",
            fontSize: "35px",
            color: "#49b004",
          }}
        >
          {resultData.best}
        </Desc>
        <Desc>{resultData.desc}</Desc>
        <Button onClick={RetryTest}>테스트 다시하기</Button>
      </Wrapper>
    </Container>
  );
};

export default Result;
