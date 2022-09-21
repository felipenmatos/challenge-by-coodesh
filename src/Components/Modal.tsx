import React from "react";
import styled from "styled-components";

type TypeModal = {
  title: string;
  base: () => void;
};

function Modal({ title, base }: TypeModal) {
  return (
    <Container>
      <Body>
        <Title>{title}</Title>
        <Button onClick={base}>Close</Button>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  background-size: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

const Body = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ##e90000;

  @media (max-width: 768px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 29px;
    color: ##e90000;
  }
`;

const Button = styled.button`
  width: 170px;
  height: 70px;
  margin-bottom: -5px;
  background: #e90000;
  border: 3px solid #e90000;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 140px;
    height: 40px;
    margin-bottom: -5px;
    background: #e90000;
    border: 3px solid #e90000;
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
  }
`;

export default Modal;
