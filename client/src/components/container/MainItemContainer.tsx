import styled from "styled-components";
import Post from "../blog/Post";

const ItemContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ItemWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* TODO
    vw 가 1000px 이하일 때는 아이템이 한 줄에 2개씩 보이도록, 그 외에는 4개로 고정하도록 수정
    & 각 아이템들 vw 에 따라 width 반응형 조절 
  */
`;

const MainItemContainer = () => {
  return (
    <ItemContainer>
      <ItemWrap>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ItemWrap>
    </ItemContainer>
  );
};

export default MainItemContainer;
