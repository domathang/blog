import styled from "styled-components";
import thumbnailSrc from "../../joe.jpeg";

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin: 30px;
  width: 200px;
  height: 200px;
`;

const ThumbnailDiv = styled.div`
  height: 200px;
  width: 200px;
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
      <Title>어떻게 하면 간절해보일까</Title>
      <Etc>23.05.22</Etc>
    </ContentContainer>
  );
};

export default Post;
