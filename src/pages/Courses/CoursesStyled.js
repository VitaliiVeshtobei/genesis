import styled from "styled-components";
import DEVICE from "../../constants/screensizes";
export const CoursesList = styled("ul")`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;

  margin-bottom: -16px;
  /* li:nth-child(odd) {
    margin-right: 16px;
  } */
`;

export const CoursesItem = styled("li")`
  text-align: center;
  @media ${DEVICE.mobile} {
    width: calc(100% / 1.1);
    margin-bottom: 16px;
    padding: 12px;
  }
  @media ${DEVICE.tablet} {
    width: calc(100% / 2 - 45px);
    :nth-child(odd) {
      margin-right: 16px;
    }
  }
  @media ${DEVICE.laptop} {
    width: calc(100% / 2 - 90px);
    :nth-child(odd) {
      margin-right: 32px;
    }
  }

  padding: 24px;
  margin-bottom: 16px;
  border-radius: 35px;
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.secondary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
