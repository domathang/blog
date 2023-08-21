import styled from "styled-components";
import Post from "../blog/Post";
import addBtn from "../../add_btn.png";
import { useState } from "react";

const ItemContainer = styled.div`
  width: 80%;
  margin: 50px auto;
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

const FilterBtn = styled.div`
  height: 3px;
  background-color: black;
  margin: 5px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s linear;
  :hover {
    transform: scale(1.05, 2);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Filter = styled.div`
  width: 80%;
`;

const FilterRow = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`;

const FilterTitle = styled.span`
  width: 150px;
  font-family: "MusinsaMedium";
`;

const FilterOptionItem = styled.button<{ $selected?: boolean }>`
  margin: 0 10px;
  border: none;
  white-space: nowrap;
  :hover {
    background-color: lightgray;
  }
  border-bottom: ${(props) => (props.$selected ? "2px solid black" : "none")};
`;

const OptionAll = styled(FilterOptionItem)`
  margin: 0 10px;
`;

const ColorOption = styled.button<{ $color?: string }>`
  background-color: ${(props) => (props.$color ? props.$color : "black")};
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0 2px;
  border: 2px outset buttonborder;
`;

const ColorOptionBox = styled.div<{ $selected?: boolean }>`
  height: 24px;
  margin: 0 10px;
  border-bottom: ${(props) => (props.$selected ? "2px solid black" : "none")};
`;

const FilterOptionItems = styled.div`
  display: flex;
  width: 60%;
`;

const AddBtn = styled.div`
  background-image: url(${addBtn});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  width: 70px;
  height: 70px;
  margin: 195px
`;

const MainItemContainer = () => {
  const [filterVisible, setFilterVisible] = useState(true);

  return (
    <ItemContainer>
      <FilterBtn onClick={() => setFilterVisible(!filterVisible)} />
      {filterVisible ? (
        <FilterContainer>
          <Filter>
            <FilterRow>
              <FilterTitle>종류</FilterTitle>
              <OptionAll>전체</OptionAll>
              <FilterOptionItems>
                <FilterOptionItem>아우터(10)</FilterOptionItem>
                <FilterOptionItem $selected={true}>상의(45)</FilterOptionItem>
                <FilterOptionItem>하의(20)</FilterOptionItem>
                <FilterOptionItem>신발(4)</FilterOptionItem>
                <FilterOptionItem>모자(2)</FilterOptionItem>
                <FilterOptionItem>악세사리(1)</FilterOptionItem>
                <FilterOptionItem>속옷(14)</FilterOptionItem>
              </FilterOptionItems>
            </FilterRow>
            <FilterRow>
              <FilterTitle>색상</FilterTitle>
              <OptionAll>전체</OptionAll>
              <FilterOptionItems>
                <ColorOptionBox>
                  <ColorOption $color="black"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="white"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="red"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox $selected={true}>
                  <ColorOption $color="brown"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="blue"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="yellow"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="indigo"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="green"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="purple"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="darkgray"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="gray"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="lightgray"></ColorOption>
                </ColorOptionBox>
                <ColorOptionBox>
                  <ColorOption $color="olive"></ColorOption>
                </ColorOptionBox>
              </FilterOptionItems>
            </FilterRow>
            <FilterRow>
              <FilterTitle>구매 일자</FilterTitle>
              <OptionAll>전체</OptionAll>
              <FilterOptionItems>
                <FilterOptionItem>1개월</FilterOptionItem>
                <FilterOptionItem $selected={true}>3개월</FilterOptionItem>
                <FilterOptionItem>1년</FilterOptionItem>
              </FilterOptionItems>
            </FilterRow>
            <FilterRow>
              <FilterTitle>구매한 가격</FilterTitle>
              <OptionAll $selected={true}>전체</OptionAll>
              <FilterOptionItems>
                <FilterOptionItem>5만원 이하</FilterOptionItem>
                <FilterOptionItem>5만원 ~ 10만원</FilterOptionItem>
                <FilterOptionItem>10만원 ~ 20만원</FilterOptionItem>
                <FilterOptionItem>20만원 ~ 30만원</FilterOptionItem>
                <FilterOptionItem>30만원 이상</FilterOptionItem>
              </FilterOptionItems>
            </FilterRow>
            <FilterRow>
              <FilterTitle>브랜드</FilterTitle>
              <OptionAll>전체</OptionAll>
              <FilterOptionItems>
                <FilterOptionItem $selected={true}>토니웩</FilterOptionItem>
                <FilterOptionItem>브랜디드</FilterOptionItem>
                <FilterOptionItem>유니클로</FilterOptionItem>
                <FilterOptionItem>커버낫</FilterOptionItem>
                <FilterOptionItem>나이키</FilterOptionItem>
                <FilterOptionItem>아디다스</FilterOptionItem>
                <FilterOptionItem>구찌</FilterOptionItem>
                <FilterOptionItem>프라다</FilterOptionItem>
              </FilterOptionItems>
            </FilterRow>
          </Filter>
        </FilterContainer>
      ) : null}
      <ItemWrap>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <AddBtn />
      </ItemWrap>
    </ItemContainer>
  );
};

export default MainItemContainer;
