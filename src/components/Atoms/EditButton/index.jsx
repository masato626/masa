import React from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = ({ onClick }) => {
  return (
    <StyledEditButton onClick={onClick}>
      <StyledShadow />
      <Img src={pencil} />
    </StyledEditButton>
  );
};
export default EditButton;

const StyledShadow = styled.div`
  background-color: ${COLOR.LIGHT_GRAY}; 
  border-radius: 50%;  /* 円形にする */
  position: absolute;  /* 絶対位置にしてボタン全体をカバー */
  top: 0;
  left: 0;
  width: 100%;  /* ボタン全体の幅に合わせる */
  height: 100%;  /* ボタン全体の高さに合わせる */
  z-index: -1;  /* 画像の背後に配置する */
`;

const StyledEditButton = styled.div`
  padding: 0;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  position: relative;
  cursor: pointer;

  & > ${StyledShadow} {
    opacity: 0;  /* 初期状態では見えない */
  }

  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2;  /* ホバー時に影が見えるようにする */
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
