import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/logo-white.svg";
import star from "../Assets/estrela.png";
import iconDelete from "../Assets/excluir.png";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import { starCountRef } from "../Auth-Provider/auth-provider";
import { onValue } from "firebase/database";
import { useHook } from "../Context/state";
import ModalDelete from "../Components/ModalDelete";
import Modal from "../Components/Modal";

function PageHome() {
  const { userContext } = useHook();
  const { favorites, setFavorites } = userContext;
  const [list, setList] = useState([]);
  const [select, setSelect] = useState("");
  const [meaningsList, setMeaningsList] = useState([]);
  const [audio, setAudio] = useState("");
  const [error, setError] = useState(false);
  const [wordList, setWordList] = useState(true);
  const [idItemDelete, setIdItemDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setList(data);
    });
  }, []);

  const dicionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${select.item}`
      );
      setMeaningsList(data.data[0].meanings[0].definitions[0].definition);
      setAudio(data.data[0].phonetics[0].audio);
      setError(false);
    } catch (error) {
      console.log(error);
      if (error) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const saveFavorites = async (e) => {
    setFavorites([
      ...favorites,
      {
        name: select.item,
        definition: meaningsList,
      },
    ]);
  };

  const handleDeleteItem = (index) => {
    let agendamento = favorites;
    agendamento.splice(index, 1);

    setFavorites(agendamento);
    setIdItemDelete(null);
  };

  function clickExit() {
    navigate("/");
    localStorage.removeItem("current_user");
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <ButtonExit onClick={() => clickExit()}>Exit</ButtonExit>
      </Header>
      <Body>
        <ContainerDisplay>
          <Display>
            <TextDisplay>{select.item}</TextDisplay>
          </Display>
          <ContainerMeanings>
            <TitleMeanings>Title Meanings</TitleMeanings>
            {error === true ? (
              <SubtitleMeanings>
                We couldn't find a definition for this name
              </SubtitleMeanings>
            ) : (
              <SubtitleMeanings>{meaningsList}</SubtitleMeanings>
            )}
          </ContainerMeanings>
          <Audio src={audio} autoPlay controls />
          <ButtonFavorites
            onClick={() => {
              saveFavorites();
              setShowModal(true);
            }}
          />
        </ContainerDisplay>
        <ContainerList>
          <Column>
            <Row>
              <ButtonList
                onClick={() => {
                  setWordList(true);
                }}
              >
                Word List
              </ButtonList>
              <ButtonListDuo
                onClick={() => {
                  setWordList(false);
                }}
              >
                Favorites
              </ButtonListDuo>
            </Row>
            {wordList ? (
              <ContainerListButtons>
                {list.map((item, id) => (
                  <div key={id}>
                    <Button
                      onClick={() => {
                        setSelect({ item });
                        dicionaryApi();
                      }}
                    >
                      {item}
                    </Button>
                  </div>
                ))}
              </ContainerListButtons>
            ) : (
              <ContainerListFavorite>
                {favorites.map((item, id) => (
                  <RowList key={id}>
                    <ColumnList>
                      <Text>{item.name}</Text>
                      <ContainerDefination>
                        <Definition>{item.definition}</Definition>
                      </ContainerDefination>
                    </ColumnList>
                    <Delete
                      src={iconDelete}
                      alt="delete icon"
                      onClick={() => setIdItemDelete(id)}
                    />
                    <ModalDelete
                      show={id === idItemDelete}
                      setClose={() => setIdItemDelete(null)}
                      message="Deseja excluir da lista?"
                      handleConfirm={() => handleDeleteItem(id)}
                    />
                  </RowList>
                ))}
              </ContainerListFavorite>
            )}
            <Message>Click a button to find out the meaning.</Message>
          </Column>
        </ContainerList>
      </Body>
      {showModal && (
        <Modal
          title="Added to favorites list."
          base={() => setShowModal(false)}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
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
`;

const ButtonExit = styled.button`
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
`;

const Body = styled.div`
  margin-top: 7%;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ContainerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Display = styled.div`
  width: 100%;
  height: 183px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;
`;

const TextDisplay = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #e90000;
`;

const ContainerMeanings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const TitleMeanings = styled.p`
  margin-top: 20px;
  margin-bottom: -10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const ButtonFavorites = styled.button`
  margin-top: 20px;
  margin-left: 90%;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  background-image: url(${star});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
`;

const SubtitleMeanings = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerListButtons = styled.div`
  width: 560px;
  height: 380px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 154px);
  grid-gap: 20px;

  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 22px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 60px;
    background-color: #e90000;
    border-radius: 20px;
    border: 3px solid #ffffff;
  }
`;

const Message = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonList = styled.button`
  width: 154px;
  height: 51px;
  margin-left: 10px;
  background: #960b22;
  border-radius: 10px 10px 0px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const ButtonListDuo = styled.button`
  margin-left: 10px;
  width: 154px;
  height: 51px;
  background: #1e1e1e;
  border-radius: 10px 10px 0px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  width: 170px;
  height: 70px;
  margin-bottom: -5px;
  background: #ffffff;
  border: 3px solid #e90000;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #e90000;
  text-align: center;
  cursor: pointer;
`;

const Audio = styled(ReactAudioPlayer)`
  width: 100%;
  margin-top: 30px;
`;

const ContainerListFavorite = styled.div`
  width: 560px;
  height: 380px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 22px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 60px;
    background-color: #e90000;
    border-radius: 20px;
    border: 3px solid #ffffff;
  }
`;

const RowList = styled.div`
  margin-top: -1px;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e90000;
  border-bottom: 1px solid #e90000;
  padding: 5px;
`;

const ColumnList = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContainerDefination = styled.div`
  width: 100%;
`;

const Definition = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #e90000;
`;

const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #e90000;
`;

const Delete = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  cursor: pointer;
`;

export default PageHome;
