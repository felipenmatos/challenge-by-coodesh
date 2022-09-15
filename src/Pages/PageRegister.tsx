import React from "react";
import styled from "styled-components";
import img from "../Assets/e-book.png";
import logo from "../Assets/logo-red.svg";

function PageRegister() {
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
        <TitleLogin>Cadastro</TitleLogin>
        <Input placeholder="Digite seu email..." />
        <Input placeholder="Digite sua senha..." />
        <Input placeholder="Repita a senha..." />
        <Button>Concluir</Button>
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
`;

const ContainerText = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const TitleText = styled.h1`
  width: 535px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-align: center;

  color: #ffffff;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const ContainerLogin = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  margin-top: 80px;
`;

const TitleLogin = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;

const Input = styled.input`
  margin-top: 30px;
  width: 361px;
  height: 44px;
  padding: 10px;
  background: #ffffff;
  border: 3px solid #e90000;
  border-radius: 10px;
  outline: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
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
`;

export default PageRegister;
