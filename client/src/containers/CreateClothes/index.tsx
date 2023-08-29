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
    const img = e.target.files[0];
    setImgFile({
      file: img,
      thumbnail: URL.createObjectURL(img),
    });
  };

  return (
    <>
      <S.Container>
        <S.Title>새로운 옷 추가</S.Title>
        <S.ImageInput>
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
    </>
  );
};

export default CreateClothes;
