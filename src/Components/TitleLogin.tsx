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
`;

export default TitleLogin;
