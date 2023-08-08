import styled from "styled-components";
import background from "../../fiora.webp";
import Header from "../header/Header";

const BackgroundContainer = styled.div`
  display: flex;
  object-fit: contain;
  height: 650px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainBackground = () => {
  return (
    <BackgroundContainer style={{ backgroundImage: `url(${background})` }}>
      <Header />
    </BackgroundContainer>
  );
};

export default MainBackground;
