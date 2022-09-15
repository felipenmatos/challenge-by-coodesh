import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../Assets/e-book.png";
import logo from "../Assets/logo-red.svg";

function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Home");
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
        <TitleLogin>Faça seu Login</TitleLogin>
        <Input placeholder="Digite seu email..." />
        <Input placeholder="Digite sua senha..." />
        <Register>Cadastre-se</Register>
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

const Register = styled.button`
  margin-top: 20px;
  margin-left: 40%;
  background: transparent;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #e90000;
  cursor: pointer;
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

export default Login;
