import { useEffect, useState } from "react";
import * as S from "./style";

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
      <S.FilterBtn
        onClick={() => {
          setVisibility(!visibility);
        }}
      />
      {visibilityAnimation && (
        <S.FilterContainer>
          <S.FilterDiv
            className={
              visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
            }
          >
            <S.FilterRow>
              <S.FilterTitle>종류</S.FilterTitle>
              <S.FilterOptionItems>
                <S.OptionAll>전체</S.OptionAll>
                <S.FilterOptionItem>아우터(10)</S.FilterOptionItem>
                <S.FilterOptionItem $selected={true}>
                  상의(45)
                </S.FilterOptionItem>
                <S.FilterOptionItem>하의(20)</S.FilterOptionItem>
                <S.FilterOptionItem>신발(4)</S.FilterOptionItem>
                <S.FilterOptionItem>모자(2)</S.FilterOptionItem>
                <S.FilterOptionItem>악세사리(1)</S.FilterOptionItem>
                <S.FilterOptionItem>속옷(14)</S.FilterOptionItem>
              </S.FilterOptionItems>
            </S.FilterRow>
            <S.FilterRow>
              <S.FilterTitle>색상</S.FilterTitle>
              <S.FilterOptionItems>
                <S.OptionAll>전체</S.OptionAll>
                <S.ColorOptionBox>
                  <S.ColorOption $color="black"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="white"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="red"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox $selected={true}>
                  <S.ColorOption $color="brown"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="blue"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="yellow"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="indigo"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="green"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="purple"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="darkgray"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="gray"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="lightgray"></S.ColorOption>
                </S.ColorOptionBox>
                <S.ColorOptionBox>
                  <S.ColorOption $color="olive"></S.ColorOption>
                </S.ColorOptionBox>
              </S.FilterOptionItems>
            </S.FilterRow>
            <S.FilterRow>
              <S.FilterTitle>구매 일자</S.FilterTitle>
              <S.FilterOptionItems>
                <S.OptionAll>전체</S.OptionAll>
                <S.FilterOptionItem>1개월</S.FilterOptionItem>
                <S.FilterOptionItem $selected={true}>3개월</S.FilterOptionItem>
                <S.FilterOptionItem>1년</S.FilterOptionItem>
              </S.FilterOptionItems>
            </S.FilterRow>
            <S.FilterRow>
              <S.FilterTitle>구매한 가격</S.FilterTitle>
              <S.FilterOptionItems>
                <S.OptionAll $selected={true}>전체</S.OptionAll>
                <S.FilterOptionItem>5만원 이하</S.FilterOptionItem>
                <S.FilterOptionItem>5만원 ~ 10만원</S.FilterOptionItem>
                <S.FilterOptionItem>10만원 ~ 20만원</S.FilterOptionItem>
                <S.FilterOptionItem>20만원 ~ 30만원</S.FilterOptionItem>
                <S.FilterOptionItem>30만원 이상</S.FilterOptionItem>
              </S.FilterOptionItems>
            </S.FilterRow>
            <S.FilterRow>
              <S.FilterTitle>브랜드</S.FilterTitle>
              <S.FilterOptionItems>
                <S.OptionAll>전체</S.OptionAll>
                <S.FilterOptionItem $selected={true}>토니웩</S.FilterOptionItem>
                <S.FilterOptionItem>브랜디드</S.FilterOptionItem>
                <S.FilterOptionItem>유니클로</S.FilterOptionItem>
                <S.FilterOptionItem>커버낫</S.FilterOptionItem>
                <S.FilterOptionItem>나이키</S.FilterOptionItem>
                <S.FilterOptionItem>아디다스</S.FilterOptionItem>
                <S.FilterOptionItem>구찌</S.FilterOptionItem>
                <S.FilterOptionItem>프라다</S.FilterOptionItem>
              </S.FilterOptionItems>
            </S.FilterRow>
          </S.FilterDiv>
        </S.FilterContainer>
      )}
    </>
  );
};

export default Filter;
