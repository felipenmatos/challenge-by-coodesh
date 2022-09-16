import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../../src/Assets/e-book.png";
import logo from "../../src/Assets/logo-red.svg";
import InputLogin from "../Components/InputLogin";
import { useHook } from "../Context/state";

function PageRegister() {
  const { userContext } = useHook();
  const { email, setEmail, password, setPassword } = userContext;
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleSubmit() {
    if (email.length === 0) {
      setError(true);
    } else if (!email.includes("@")) {
      setError(true);
    } else if (!email.includes(".com")) {
      setError(true);
    } else if (password !== passwordRepeat) {
      setError(true);
    } else {
      navigate("/Concluded");
    }
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
        <TitleLogin>Cadastro</TitleLogin>
        <InputLogin
          placeholder="Digite seu email..."
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          maxLength={80}
        />
        <InputLogin
          placeholder="Digite sua senha..."
          value={password}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          maxLength={40}
        />
        <InputLogin
          placeholder="Repita a senha..."
          type="text"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          maxLength={40}
        />
        {error && (
          <Error>Não foi possível efetuar o cadastro, confira os dados.</Error>
        )}
        <Button onClick={() => handleSubmit()}>Concluir</Button>
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

const Error = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 29px;
  color: #e90000;
  margin-top: -5px;
  margin-bottom: -24px;
`;

const Button = styled.button`
  margin-top: 35px;
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
