import React from "react";
import styled from "styled-components";
import PangImage from "../assets/ggompang.jpeg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
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
  letter-spacing: 6px;
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

  button {
    border: none;
    width: 80%;
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

const Title = styled.div`
  font-size: 30px;
  font-weight: 550;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 40px;
  img {
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 550;
  margin-bottom: 20px;
  text-align: center;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Container>
      <Header>예비집사 판별기🐈</Header>
      <Wrapper>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img src={PangImage} alt="catMain" width={350} height={350} />
        </LogoImage>
        <Desc>
          {" "}
          --- MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기 --- <br /> 내가
          집사가 되어서 고양이를 키운다면...?
        </Desc>
        <Button onClick={handleClickButton}>테스트 시작</Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
