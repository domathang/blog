import styled from "styled-components";
import thumbnailSrc from "../../joe.jpeg";

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: center;
  margin: 30px;
  width: min-content;
  height: min-content;
  transition: all 0.5s linear;
  cursor: pointer;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;

const ThumbnailDiv = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProductName = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 16px;
  font-family: "MusinsaMedium";
`;

const Price = styled.div`
  width: 100%;
  font-size: 11px;
  font-family: "MusinsaMedium";
`;

const BrandName = styled.div`
  width: 100%;
  font-size: 16px;
  font-family: "MusinsaBold";
`;

const Post = () => {
  return (
    <ContentContainer>
      <ThumbnailDiv
        style={{
          backgroundImage: `url(https://cdn.imweb.me/thumbnail/20230425/de992e2de2480.jpg)`,
        }}
      ></ThumbnailDiv>
      <BrandName>아디다스</BrandName>
      <ProductName>BOI hoodie</ProductName>
      <Price>43,000원</Price>
    </ContentContainer>
  );
};

export default Post;
