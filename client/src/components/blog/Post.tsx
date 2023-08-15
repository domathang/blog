import styled from "styled-components";
import thumbnailSrc from "../../joe.jpeg";

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin: 30px;
  width: 440px;
  height: 440px;
`;

const ThumbnailDiv = styled.div`
  height: 400px;
  width: 400px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  width: 100%;
  padding: 5px 0px;
  font-size: 14px;
  font-weight: bold;
`;

const Etc = styled.div`
  font-size: 11px;
  margin: auto;
`;

const Post = () => {
  return (
    <ContentContainer>
      <ThumbnailDiv
        style={{
          backgroundImage: `url(https://cdn.imweb.me/thumbnail/20230425/de992e2de2480.jpg)`,
        }}
      ></ThumbnailDiv>
      <Title>BOI hoodie</Title>
      <Etc>43,000원</Etc>
    </ContentContainer>
  );
};

export default Post;
