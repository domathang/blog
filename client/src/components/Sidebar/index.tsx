import React, { useEffect, useState } from "react";
import * as S from "./style";

const Sidebar = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const Category = (props) => {
    return <S.StyledCategory>{props.text} ▼</S.StyledCategory>;
  };

  return (
    <>
      <S.Container>
        <S.Logo src="img/joe.jpeg" />

        <S.Title>Dony log</S.Title>

        <S.Categories>
          <S.StyledButton onClick={() => setIsClicked(!isClicked)}>
            <Category text="First item"></Category>
          </S.StyledButton>
          {isClicked ? (
            <S.CategoryItem>
              <a href="twitch.tv">twitch</a>
            </S.CategoryItem>
          ) : null}
          <Category text="Second item" />
          <Category text="Third item" />
        </S.Categories>
      </S.Container>

      <S.ExcludeBackground onClick={() => props.setIsMenuClicked(false)} />
    </>
  );
};

export default Sidebar;
