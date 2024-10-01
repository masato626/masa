import React from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg";
const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <StyledShadow />
      <img src={plus} />
      <StyledText>タスクを追加</StyledText>
    </StyledAddTaskButton>
  );
};
export default AddTaskButton;
const StyledShadow = styled.div`
  background-color: ${COLOR.GREEN};
  border-radius: 12px;
  position: absolute;
  width: 100%; /* ボタン全体の幅に合わせる */
  height: 100%;
`;
const StyledAddTaskButton = styled.div`
  display: flex;
  position: relative;
  padding: 2px 6px;
  width: 126px;
  left: 24px;

  & > ${StyledShadow} {
    opacity: 0; /* 初期状態では見えない */
  }

  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2; /* ホバー時に影が見えるようにする */
    }
  }
`;
const StyledText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${COLOR.GREEN};
  ${TEXT.S};
`;
