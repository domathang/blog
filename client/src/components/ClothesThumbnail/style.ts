import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: center;
  margin: 30px;
  width: min-content;
  height: min-content;
  transition: all 0.5s linear;
  cursor: pointer;
`;

export const ThumbnailDiv = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProductName = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 16px;
  font-family: "MusinsaMedium";
`;

export const Price = styled.div`
  width: 100%;
  font-size: 11px;
  font-family: "MusinsaMedium";
`;

export const BrandName = styled.div`
  width: 100%;
  font-size: 16px;
  font-family: "MusinsaBold";
`;