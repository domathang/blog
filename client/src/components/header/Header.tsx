import styled from "styled-components";
import menuSrc from "../../icon _menu_.svg";
import logo from "../../closet.png";
import { useState } from "react";
import Sidebar from "./Sidebar";

const HeaderContainer = styled.div`
  display: flex;
  height: 120px;
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

const Logo = styled.img`
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 73px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBtn = styled.span`
  color: black;
  font-size: 12px;
  cursor: pointer;
`;

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <HeaderContainer>
      {isMenuClicked ? <Sidebar setIsMenuClicked={setIsMenuClicked} /> : null}
      <HeaderLeft>
        <MenuIcon onClick={() => setIsMenuClicked(true)}></MenuIcon>
      </HeaderLeft>
      <Logo src={logo}/>
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
