import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

export const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 70%;
  object-fit: cover;
  margin-bottom: 50px;
`;

export const Info = styled.p`
  color: gray;
  font-size: 11px;
`;

export const Copyright = styled.b`
  color: gray;
  font-size: 11px;
`;
