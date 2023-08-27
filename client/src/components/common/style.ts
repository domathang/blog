import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
`;

export const StyledListInSidebar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  flex-direction: column;
  margin: 0;
  text-align: center;
  border-right: 1px solid black;
  background-color: rgb(255, 255, 255);
`;

export const StyledNotSidebarBackground = styled.div`
  position: fixed;
  left: 300px;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  margin: 60px auto 20px auto;
  object-fit: cover;
`;

export const StyledTitle = styled.span`
  margin-top: 0;
  margin-bottom: 50px;
  font-size: 32px;
`;

export const StyledCategories = styled.ul`
  padding: 0 50px 0 50px;
`;

export const StyledCategory = styled.ul`
  padding: 0;
  display: flex;
  text-decoration: underline;
  justify-content: left;
  font-weight: bold;
  list-style: none;
`;

export const StyledButton = styled.button`
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
  /* margin-left: 70px; */
`;

export const CategoryItem = styled.li``;
