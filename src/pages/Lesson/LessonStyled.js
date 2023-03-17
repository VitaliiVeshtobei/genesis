import { Link } from "react-router-dom";

import styled from "styled-components";

export const TitleStyled = styled("h2")`
  text-align: center;
  margin-bottom: 16px;
  color: ${(p) => p.theme.primary};
`;

export const SliderContainer = styled("div")`
  width: 750px;
  margin: 0 auto;
`;
