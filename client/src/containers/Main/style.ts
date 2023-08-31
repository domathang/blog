import styled from "styled-components";
import addBtn from "../../add_btn.png";

export const Container = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* TODO
    vw 가 1000px 이하일 때는 아이템이 한 줄에 2개씩 보이도록, 그 외에는 4개로 고정하도록 수정
    & 각 아이템들 vw 에 따라 width 반응형 조절 
  */
`;

export const AddBtn = styled.div`
  background-image: url(${addBtn});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  width: 70px;
  height: 70px;
  margin: 195px;
  transition: transform 0.1s linear;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
