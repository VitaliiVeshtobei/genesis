import styled from "styled-components";
import ReactPlayer from "react-player";

export const ReactPlayerStyled = styled(ReactPlayer)`
  margin: 0 auto 30px auto;
  video {
    border-radius: 35px;
  }
`;

export const ContainerStyled = styled("div")`
  position: relative;
`;
export const TitleStyled = styled("h3")`
  position: absolute;
  left: 50%;
  color: ${(p) => p.theme.secondary};
  transform: translate(-50%);
`;
