import styled from "styled-components";
import menuSrc from "../../icon _menu_.svg";

export const Container = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  padding: 20px 60px;
`;

export const LeftWrapper = styled.section`
  display: flex;
  width: 50%;
  align-items: center;
`;

export const RightWrapper = styled.section`
  display: flex;
  width: 50%;
  justify-content: right;
`;

export const MenuIcon = styled.span`
  background-image: url("${menuSrc}");
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 73px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBtn = styled.span`
  color: black;
  font-size: 12px;
  cursor: pointer;
`;