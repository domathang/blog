import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./containers/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import CreateClothes from "./containers/CreateClothes";
import Login from "./containers/Login";

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
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/clothes" element={<CreateClothes />} />
        </Routes>
        <PaddingContainer />
        <PaddingContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
