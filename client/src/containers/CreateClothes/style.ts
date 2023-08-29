import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 24px;
`;

export const ImageInput = styled.div`
  img {
    max-width: 325px;
    max-height: 325px;
  }
  label {
    display: inline-block;
    cursor: pointer;
  }
  input[type="file"] {
    width: 0;
    height: 0;
  }
`;
