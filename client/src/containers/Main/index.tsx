import ClothesThumbnail from "../../components/ClothesThumbnail";
import Filter from "../../components/Filter";
import * as S from "./style";

const MainPage = () => {
  return (
    <S.Container>
      <Filter />
      <S.Wrapper>
        <ClothesThumbnail />
        <ClothesThumbnail />
        <ClothesThumbnail />
        <ClothesThumbnail />
        <ClothesThumbnail />
        <S.AddBtn />
      </S.Wrapper>
    </S.Container>
  );
};

export default MainPage;
