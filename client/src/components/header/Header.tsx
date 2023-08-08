import styled from "styled-components";
import menuSrc from "../../menu.svg";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const HeaderContainer = styled.div`
  display: flex;
  height: 63px;
  width: 100%;
  padding: 0px 60px;
`;

const HeaderLeft = styled.section`
  display: flex;
  width: 50%;
  align-items: center;
`;

const HeaderRight = styled.section`
  display: flex;
  width: 50%;
  justify-content: right;
`;

const MenuIcon = styled.span`
  background-image: url("${menuSrc}");
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 73px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBtn = styled.span`
  color: white;
  font-size: 12px;
  cursor: pointer;
`;

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <HeaderContainer>
      <Sidebar/>
      <HeaderLeft>
        <MenuIcon onClick={() => setIsVisible(!isVisible)}></MenuIcon>
      </HeaderLeft>
      <HeaderRight>
        <BtnContainer>
          <HeaderBtn onClick={() => console.log("Join")}>Join</HeaderBtn>
          <HeaderBtn onClick={() => console.log("Login")}>Login</HeaderBtn>
        </BtnContainer>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
