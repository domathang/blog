import joe from "../../joe.jpeg";
import insta from "../../ icon _instagram_.png";
import * as S from "./style";

const Footer = () => {
  return (
    <S.Container>
      <S.Logo src={joe}></S.Logo>
      <S.Info>
        CEO: DOHYUN KWAKㅣ Phone +82 10 5620 2196
        <br />
        Address: 5, Yangnyeong-ro 6ra-gil, Gwanak-gu, Seoul, Republic of Korea
        <br />
        (3pm-5am except 1pm-2pm, Weekend and Holiday Off)
        <br />
        <br />
        Terms of Use ㅣ Privacy
      </S.Info>
      <a href="https://www.instagram.com/gakdony/">
        <img src={insta} />
      </a>
      <br />
      <S.Copyright>
        S.Copyrightⓒ 2020 Half Boyfriend Club All Rights Reserved
      </S.Copyright>
    </S.Container>
  );
};

export default Footer;
