import React, { useEffect, useState } from "react";
import {
  StyledLogo,
  StyledSidebar,
  StyledCategories,
  StyledTitle,
  StyledCategory,
  CategoryItem,
  StyledButton,
} from "./style";

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const Category = (props) => {
    return <StyledCategory>{props.text} ▼</StyledCategory>;
  };

  return (
    <StyledSidebar>
      <StyledLogo src="img/joe.jpeg" />

      <StyledTitle>Dony log</StyledTitle>

      <StyledCategories>
        <StyledButton onClick={() => setIsClicked(!isClicked)}>
          <Category text="First item"></Category>
        </StyledButton>
        {isClicked ? (
          <CategoryItem>
            <a href="twitch.tv">twitch</a>
          </CategoryItem>
        ) : null}
        <Category text="Second item" />
        <Category text="Third item" />
      </StyledCategories>
    </StyledSidebar>
  );
};

export default Sidebar;
