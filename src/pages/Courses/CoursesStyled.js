import styled from "styled-components";

export const CoursesList = styled("ul")`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  min-height: 500px;

  margin-bottom: -16px;
  li:nth-child(odd) {
    margin-right: 16px;
  }
`;

export const CoursesItem = styled("li")`
  text-align: center;
  width: calc(100% / 2 - 90px);
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 35px;
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.secondary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;
