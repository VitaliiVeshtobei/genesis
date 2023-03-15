import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: block;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  width: 50px;
  height: 50px;
  border: 5px solid #dcdcdc;
  border-top-color: #6495ed;
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;
