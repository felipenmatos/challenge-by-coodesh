import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../../src/Assets/e-book.png";
import logo from "../../src/Assets/logo-red.svg";
import imgConcluded from "../Assets/valid.svg";
import TitleLogin from "../Components/TitleLogin";

function PageConcluded() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Container>
      <ContainerText>
        <TitleText>
          Aprenda e consulte palavras em Inglês de forma simples e fácil.
        </TitleText>
        <Img src={img} />
      </ContainerText>
      <ContainerLogin>
        <Logo src={logo} />
        <TitleLogin text="Cadastro Concluído" />
        <ImgConcluded src={imgConcluded} />
        <Button onClick={() => handleClick()}>Entrar</Button>
      </ContainerLogin>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

const ContainerText = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleText = styled.h1`
  width: 535px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-align: center;

  color: #ffffff;

  @media (max-width: 768px) {
    width: 350px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 34px;
    text-align: center;

    color: #ffffff;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const ContainerLogin = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 70vh;
  }
`;

const Logo = styled.img`
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const ImgConcluded = styled.img`
  width: 241.56px;
  height: 163.7px;

  @media (max-width: 768px) {
    width: 201.56px;
    height: 123.7px;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  width: 131px;
  height: 64px;
  background: #e90000;
  border-radius: 5px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 15px;
    width: 100px;
    height: 44px;
    background: #e90000;
    border-radius: 5px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default PageConcluded;
