import React from "react";
import styled from "styled-components";

function PageHome() {
  return (
    <Container>
      <Header>
        <Logo />
        <ButtonExit>Exit</ButtonExit>
      </Header>
      <Body>
        <ContainerDisplay>
          <Display>
            <TextDisplay></TextDisplay>
          </Display>
          <ContainerMeanings>
            <TitleMeanings>Title Meanings</TitleMeanings>
            <SubtitleMeanings>Descriptions</SubtitleMeanings>
          </ContainerMeanings>
          <RowButtons>
            <ButtonReturn>Voltar</ButtonReturn>
            <ButtonNext>Próximo</ButtonNext>
          </RowButtons>
        </ContainerDisplay>
        <ContainerList>
          <Column>
            <Row>
              <ButtonList>Word List</ButtonList>
              <ButtonListDuo>Favorites</ButtonListDuo>
            </Row>
            <ContainerList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
              <RowList></RowList>
            </ContainerList>
          </Column>
        </ContainerList>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;

const Logo = styled.img``;

const ButtonExit = styled.button``;

const Body = styled.div``;

const ContainerDisplay = styled.div``;

const Display = styled.div``;

const TextDisplay = styled.p``;

const ContainerMeanings = styled.div``;

const TitleMeanings = styled.p``;

const SubtitleMeanings = styled.p``;

const RowButtons = styled.div``;

const ButtonReturn = styled.button``;

const ButtonNext = styled.button``;

const ContainerList = styled.div``;

const Column = styled.div``;

const Row = styled.div``;

const ButtonList = styled.button``;

const ButtonListDuo = styled.button``;

const RowList = styled.div``;

export default PageHome;
