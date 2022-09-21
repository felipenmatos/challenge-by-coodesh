import logo from "../Assets/logo-white.svg";
import styled from "styled-components";

type TypeHeader = {
  base: () => void;
};

function Header({ base }: TypeHeader) {
  return (
    <Container>
      <Logo src={logo} />
      <Button onClick={base}>Exit</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 139px;
  height: 51px;
  margin-top: 48px;
  margin-left: 48px;

  @media (max-width: 768px) {
    width: 89px;
    height: 26px;
    margin-top: 28px;
    margin-left: 28px;
  }
`;

const Button = styled.button`
  margin-top: 48px;
  margin-right: 48px;
  width: 73px;
  height: 34px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #e90000;
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 28px;
    margin-right: 28px;
    width: 53px;
    height: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #e90000;
    background-color: #ffffff;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

export default Header;
