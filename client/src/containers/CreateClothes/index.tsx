import * as S from "./style";
import imgInputSrc from "../../imginput.png";
import { useState } from "react";

type UploadImage = {
  file: File;
  thumbnail: string;
};

const CreateClothes = () => {
  const [imgFile, setImgFile] = useState<UploadImage | null>(null);
  const onChange = (e) => {
    if (!e) {
      setImgFile(null);
    } else {
      const img = e.target.files[0];
      setImgFile({
        file: img,
        thumbnail: URL.createObjectURL(img),
      });
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>새로운 옷 추가</S.Title>
        <S.ImageInput>
          <button onClick={() => onChange(null)}>x</button>
          <label htmlFor="ex_file">
            {imgFile ? (
              <img src={imgFile.thumbnail}></img>
            ) : (
              <img src={imgInputSrc} alt=""></img>
            )}
          </label>
          <input
            type="file"
            id="ex_file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={(e) => onChange(e)}
          />
        </S.ImageInput>
      </S.Container>
      <S.InputContainer>
        <S.InputRowWrapper>
          <S.InputNameWrapper>
            <S.InputName>종류</S.InputName>
          </S.InputNameWrapper>
          <S.InputWrapper>
            <select id="kind" onChange={(e) => console.log(e.target.value)}>
              <option value="아우터">아우터</option>
              <option value="상의">상의</option>
              <option value="하의">하의</option>
              <option value="신발">신발</option>
            </select>
          </S.InputWrapper>
        </S.InputRowWrapper>
        <S.InputRowWrapper>
          <S.InputNameWrapper>
            <S.InputName>색상</S.InputName>
          </S.InputNameWrapper>
          <S.InputWrapper>
            <S.Input
              className="colorInput"
              type="color"
              onChange={(e) => console.log(e.target.value)}
            />
          </S.InputWrapper>
        </S.InputRowWrapper>
        <S.InputRowWrapper>
          <S.InputNameWrapper>
            <S.InputName>구매일자</S.InputName>
          </S.InputNameWrapper>
          <S.InputWrapper>
            <S.Input type="date" />
          </S.InputWrapper>
        </S.InputRowWrapper>
        <S.InputRowWrapper>
          <S.InputNameWrapper>
            <S.InputName>구매한 가격</S.InputName>
          </S.InputNameWrapper>
          <S.InputWrapper>
            <S.Input
              type="text"
              value="50,000"
              onChange={(e) => console.log(e.target.value)}
            />
          </S.InputWrapper>
        </S.InputRowWrapper>
        <S.InputRowWrapper>
          <S.InputNameWrapper>
            <S.InputName>브랜드</S.InputName>
          </S.InputNameWrapper>
          <S.InputWrapper>
            <S.Input
              type="text"
              value="노브랜드"
              onChange={(e) => console.log(e.target.value)}
            />
          </S.InputWrapper>
        </S.InputRowWrapper>
        <S.InputRowWrapper>
          <S.InputNameWrapper>
            <S.InputName>구매링크</S.InputName>
          </S.InputNameWrapper>
          <S.InputWrapper>
            <S.Input type="text" />
          </S.InputWrapper>
        </S.InputRowWrapper>
        <S.InputRowWrapper>
          <S.InputNameWrapper>
            <S.InputName>사이즈</S.InputName>
          </S.InputNameWrapper>
          <S.InputWrapper>
            <S.Input
              type="text"
              value="M"
              onChange={(e) => console.log(e.target.value)}
            />
          </S.InputWrapper>
        </S.InputRowWrapper>
        <S.SaveBtn
          onClick={() => {
            console.log("Submit");
          }}
        >
          저장
        </S.SaveBtn>
      </S.InputContainer>
    </>
  );
};

export default CreateClothes;
