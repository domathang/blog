import styled from "styled-components";
import joe from "../../joe.jpeg";
import insta from "../../ icon _instagram_.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 70%;
  object-fit: cover;
  margin-bottom: 50px;
`;

const Info = styled.p`
  color: gray;
  font-size: 11px;
`;

const Bold = styled.b`
  color: gray;
  font-size: 11px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={joe}></Logo>
      <Info>
        CEO: DOHYUN KWAKㅣ Phone +82 10 5620 2196
        <br />
        Address: 5, Yangnyeong-ro 6ra-gil, Gwanak-gu, Seoul, Republic of Korea
        <br />
        (3pm-5am except 1pm-2pm, Weekend and Holiday Off)
        <br />
        <br />
        Terms of Use ㅣ Privacy
      </Info>
      <a href="https://www.instagram.com/gakdony/">
        <img src={insta} />
      </a>
      <br />
      <Bold>Copyrightⓒ 2020 Half Boyfriend Club All Rights Reserved</Bold>
    </FooterContainer>
  );
};

export default Footer;
