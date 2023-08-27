import * as S from "./style";

const ClothesThumbnail = () => {
  return (
    <S.ContentContainer>
      <S.ThumbnailDiv
        style={{
          backgroundImage: `url(https://cdn.imweb.me/thumbnail/20230425/de992e2de2480.jpg)`,
        }}
      ></S.ThumbnailDiv>
      <S.BrandName>아디다스</S.BrandName>
      <S.ProductName>BOI hoodie</S.ProductName>
      <S.Price>43,000원</S.Price>
    </S.ContentContainer>
  );
};

export default ClothesThumbnail;
