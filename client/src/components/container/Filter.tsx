import { useEffect, useState } from "react";
import styled from "styled-components";

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
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const FilterDiv = styled.div`
  text-align: center;
  width: 80%;

  @keyframes slide-fade-in-dropdown {
    from {
      transform: translateY(-225px);
      height: 0px;
    }

    to {
      transform: translateY(0%);
      height: 225px;
    }
  }

  @keyframes slide-fade-out-dropdown {
    from {
      transform: translateY(0%);
      height: 225px;
    }

    to {
      transform: translateY(-225px);
      height: 0;
    }
  }

  &.slide-fade-in-dropdown {
    animation: slide-fade-in-dropdown 0.5s linear;
  }

  &.slide-fade-out-dropdown {
    animation: slide-fade-out-dropdown 0.5s linear;
    animation-fill-mode: forwards;
  }
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: center;
  height: 45px;
  align-items: center;
  overflow: scroll;
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
  background-color: ${(props) => (props.$selected ? "lightgray" : "white")};
  transition: background-color 0.5s linear;
  :hover {
    background-color: lightgray;
  }
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
  transition: border-color 0.1s linear;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.$selected ? "black" : "white")};
  :hover {
    border-color: black;
  }
`;

const FilterOptionItems = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
`;

const Filter = () => {
  const [visibility, setVisibility] = useState(true);
  const [visibilityAnimation, setVisibilityAnimation] = useState(true);

  useEffect(() => {
    if (visibility) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 500);
    }
  }, [visibility]);

  return (
    <>
      <FilterBtn
        onClick={() => {
          setVisibility(!visibility);
        }}
      />
      {visibilityAnimation && (
        <FilterContainer>
          <FilterDiv
            className={
              visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
            }
          >
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
          </FilterDiv>
        </FilterContainer>
      )}
    </>
  );
};

export default Filter;
