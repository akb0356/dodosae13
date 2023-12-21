import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.h1`
  margin-top: 0;
  font-size: 35px;
  font-family: "DNFBitBitv2";
  letter-spacing: 3px;
  font-weight: normal;
`;

interface props {
  readonly label: string;
}

const Title = ({ label }: props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Title;
