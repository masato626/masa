import React from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";

const Title = () => {
  return <StyledTitle>SIMPLE TODO APP</StyledTitle>;
};
export default Title;

const StyledTitle = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.L};
  font-family: ${FONTFAMILY.ROBOTO};
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M};
  }
`;
