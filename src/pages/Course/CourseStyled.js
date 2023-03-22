import styled from "styled-components";
import DEVICE from "../../constants/screensizes";
export const TitleStyled = styled("h2")`
  text-align: center;
  margin-bottom: 16px;
  color: ${(p) => p.theme.primary};
`;

export const SliderContainer = styled("div")`
  @media ${DEVICE.mobile} {
    padding: 0 50px;
  }
  @media ${DEVICE.tablet} {
    padding: 0 70px;
  }
  @media ${DEVICE.laptop} {
  }
`;

export const ButtonStyled = styled("button")`
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  @media ${DEVICE.mobile} {
    margin-left: 8px;
    margin-top: 0;
    margin-bottom: 25px;
    padding: 5px 10px;
  }
  @media ${DEVICE.tablet} {
    margin-left: 30px;
    margin-top: 0;
    padding: 10px 20px;
  }
  @media ${DEVICE.laptop} {
    margin-left: 50px;
    margin-top: 0;
    padding: 15px 30px;
  }
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #7d7f8d inset, 0 0 0 0 #f137a6;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #f137a6 inset, 0 0 10px 4px #f137a6;
    color: #f137a6;
  }
`;
