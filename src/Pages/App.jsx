import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../Assets/e-book.png";
import logo from "../Assets/logo-red.svg";
import InputLogin from "../Components/InputLogin";
import TitleLogin from "../Components/TitleLogin";
import { useHook } from "../Context/state";

function Login() {
  const navigate = useNavigate();
  const { userContext } = useHook();
  const { email, password } = userContext;
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [error, setError] = useState(false);
  const [dados, setDados] = useState([]);

  function handleValidate() {
    if (
      passwordLogin.length === 0 ||
      emailLogin.length === 0 ||
      passwordLogin !== password ||
      emailLogin !== email
    ) {
      setError(true);
    } else if (!emailLogin.includes("@")) {
      setError(true);
    } else if (!emailLogin.includes(".com")) {
      setError(true);
    } else {
      navigate("/Home");
    }
  }

  function clickRegister() {
    navigate("/register");
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
        <TitleLogin text="Faça seu Login" />
        <InputLogin
          placeholder="Digite seu email..."
          type="text"
          value={emailLogin}
          onChange={(e) => setEmailLogin(e.target.value)}
        />
        <InputLogin
          placeholder="Digite sua senha..."
          type="text"
          value={passwordLogin}
          onChange={(e) => setPasswordLogin(e.target.value)}
        />
        {error && (
          <Error>Não foi encontrado esses dados. Efetue o cadastro!</Error>
        )}
        <Register onClick={() => clickRegister()}>Cadastre-se</Register>
        <Button onClick={() => handleValidate()}>Entrar</Button>
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

const Error = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 29px;
  color: #e90000;
  margin-top: -5px;
  margin-bottom: -24px;
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
