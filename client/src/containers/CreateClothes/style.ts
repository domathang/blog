import { ContentContainer } from "./../../components/ClothesThumbnail/style";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 24px;
  margin-top: 30px;
`;

export const ImageInput = styled.div`
  margin-top: 30px;
  position: relative;
  img {
    max-width: 240px;
    max-height: 240px;
  }
  label {
    display: inline-block;
    cursor: pointer;
  }
  input[type="file"] {
    width: 0;
    height: 0;
  }
  button {
    position: absolute;
    background-color: lightgray;
    color: black;
    right: -10px;
    top: -10px;
    width: 25px;
    height: 25px;
    border: none;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 50%;
    text-align: center;
    justify-content: center;
    font-weight: bold;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const InputRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 168px;
  padding: 15px 0;
  text-align: center;
  select {
    width: 163px;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
    :focus {
      outline: none;
    }
  }
  option {
    background-color: black;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 240px;
`;

export const InputNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 167px;
`;

export const InputName = styled.span`
  white-space: nowrap;
`;

export const Input = styled.input`
  border: none;
  text-align: center;
  border-bottom: 1px solid black;
  :focus {
    outline: none;
  }
  &.colorInput {
    width: 25px;
    height: 25px;
    border: none;
  }
`;

export const SaveBtn = styled.button`
  border: 1px solid green;
  border-radius: 15px;
  background-color: white;
  text-align: center;
  width: 82px;
  color: green;
  transition: all 0.5s ease-out;
  margin-top: 30px;
  :hover {
    background-color: green;
    color: white;
  }
`;
