import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import MainItemContainer from "./components/container/MainItemContainer";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import GlobalStyle from "./GlobalStyle";

const PaddingContainer = styled.div`
  height: 200px;
  padding: 0px 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <MainItemContainer />
        <PaddingContainer />
        <PaddingContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
