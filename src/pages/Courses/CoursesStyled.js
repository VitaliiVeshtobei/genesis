import styled from "styled-components";

export const CoursesList = styled("ul")`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-bottom: -16px;
`;

export const CoursesItem = styled("li")`
  text-align: center;
  width: calc(100% / 2 - 90px);
  padding: 24px;
  margin-right: 16px;
  margin-bottom: 16px;
  border-radius: 35px;
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.secondary};
  /* box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
