import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainBackground from "./components/container/MainBackground";
import styled from "styled-components";
import MainItemContainer from "./components/container/MainItemContainer";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

const PaddingContainer = styled.div`
  height: 200px;
  padding: 0px 20px;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PaddingContainer />
      <MainItemContainer />
      <PaddingContainer />
      <PaddingContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
