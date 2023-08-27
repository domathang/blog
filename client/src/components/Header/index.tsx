import logo from "../../closet.png";
import { useState } from "react";
import Sidebar from "../Sidebar";
import * as S from "./style"

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <S.Container>
      {isMenuClicked ? <Sidebar setIsMenuClicked={setIsMenuClicked} /> : null}
      <S.LeftWrapper>
        <S.MenuIcon onClick={() => setIsMenuClicked(true)}></S.MenuIcon>
      </S.LeftWrapper>
      <S.Logo src={logo} />
      <S.RightWrapper>
        <S.BtnContainer>
          <S.HeaderBtn onClick={() => console.log("Join")}>Join</S.HeaderBtn>
          <S.HeaderBtn onClick={() => console.log("Login")}>Login</S.HeaderBtn>
        </S.BtnContainer>
      </S.RightWrapper>
    </S.Container>
  );
};

export default Header;
