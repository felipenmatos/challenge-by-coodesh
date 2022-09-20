import styled from "styled-components";

function ModalDelete({ show, setClose, message, handleConfirm }) {
  return (
    <>
      {show && (
        <Container>
          <Div></Div>
          <Span>{message}</Span>
          <ButtonConfirm onClick={() => handleConfirm()}>Sim</ButtonConfirm>
          <ButtonNo onClick={() => setClose()}>Não</ButtonNo>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  width: 110px;
  height: 70px;
  margin-top: 115px;
  margin-left: -540px;
  padding: 7px;
  background: #000;
  border-radius: 4px;
  z-index: 1;
`;

const Div = styled.div`
  position: absolute;
  top: -10px;
  width: 0;
  height: 0;
  border-left: 8px solid trasparent;
  border-right: 8px solid trasparent;
  border-bottom: 10px solid #e4f2fd;
`;

const Span = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 13px;
  font-family: "Ubuntu", sans-serif;
  color: #fff;
`;

const ButtonConfirm = styled.button`
  margin: 5px;
  padding: 10px;
  width: 45px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const ButtonNo = styled.button`
  margin: 5px;
  padding: 10px;
  width: 45px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export default ModalDelete;
