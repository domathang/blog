import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 140px;
`;

const LoginTitle = styled.span``;

const LoginInput = styled.input`
  text-align: center;
  background-color: white;
  width: 200px;
  height: 25px;
`;

const Login = () => {
  return (
    <>
      <Container>
        <InputContainer>
          <LoginTitle>Login</LoginTitle>
          <LoginInput
            onChange={(e) => console.log(e.target.value)}
          ></LoginInput>
        </InputContainer>
      </Container>
    </>
  );
};

export default Login;
