import styled from "styled-components";
import ReactPlayer from "react-player";
import DEVICE from "../../constants/screensizes";

export const ReactPlayerStyled = styled(ReactPlayer)`
  margin: 0 auto 30px auto;
  video {
    border-radius: 35px;
  }
`;

export const ContainerStyled = styled("div")`
  position: relative;

  @media ${DEVICE.mobile} {
    width: calc(100% / 2 + 100px);
  }
  @media ${DEVICE.tablet} {
    width: calc(100% / 2 + 200px);
  }
  @media ${DEVICE.laptop} {
    width: calc(100% / 2);
  }
  margin: 0 auto;
`;
export const TitleStyled = styled("h3")`
  white-space: nowrap;
  @media ${DEVICE.mobile} {
    font-size: 12px;
  }
  @media ${DEVICE.tablet} {
    font-size: 16px;
  }
  @media ${DEVICE.laptop} {
    font-size: 24px;
  }

  position: absolute;
  left: 50%;
  color: ${(p) => p.theme.secondary};
  transform: translate(-50%);
`;
