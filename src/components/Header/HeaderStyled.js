import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Text = styled("h1")`
  color: ${(p) => p.theme.secondary};
`;
