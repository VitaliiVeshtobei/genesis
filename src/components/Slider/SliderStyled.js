import styled from "styled-components";
import Slider from "react-slick";
import DEVICE from "../../constants/screensizes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageStyled = styled("img")`
  opacity: ${(p) => (p.status === "locked" ? "50%" : "100%")};
  width: 150px;
  height: 100px;
`;
export const SliderStyled = styled(Slider)`
  @media ${DEVICE.mobile} {
    slidestoshow: 4;
  }

  .slick-slide img {
    border-radius: 35px;
    margin: 0 auto;
    cursor: pointer;
  }

  .slick-slide h3 {
    font-size: 16px;
    margin: 8px 0;
    text-align: center;
    color: ${(p) => p.theme.primary};
    cursor: pointer;
  }
`;
