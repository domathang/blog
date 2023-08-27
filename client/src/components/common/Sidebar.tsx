import React, { useEffect, useState } from "react";
import {
  StyledLogo,
  StyledSidebar,
  StyledCategories,
  StyledTitle,
  StyledCategory,
  CategoryItem,
  StyledButton,
  StyledNotSidebarBackground,
  StyledListInSidebar,
} from "./style";

const Sidebar = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const Category = (props) => {
    return <StyledCategory>{props.text} ▼</StyledCategory>;
  };

  return (
    <StyledSidebar>
      <StyledListInSidebar>
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
      </StyledListInSidebar>

      <StyledNotSidebarBackground
        onClick={() => props.setIsMenuClicked(false)}
      />
    </StyledSidebar>
  );
};

export default Sidebar;
