import styled from "styled-components";

type TypeInput = {
  placeholder: string;
  value: string;
  type: string;
  onChange: () => string;
  maxLength: number;
};

function InputLogin({
  placeholder,
  value,
  type,
  onChange,
  maxLength,
}: TypeInput) {
  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        maxLength={maxLength}
      />
    </Container>
  );
}

const Container = styled.div``;

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

export default InputLogin;
