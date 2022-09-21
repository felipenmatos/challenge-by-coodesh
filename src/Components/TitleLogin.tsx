import styled from "styled-components";

type TypeTitle = {
  text: string;
};

function TitleLogin({ text }: TypeTitle) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  @media (max-width: 768px) {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
    margin-bottom: -10px;
  }
`;

export default TitleLogin;
