import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

export const ImageContainer = styled("div")`
  border-radius: 35px;
  margin: 20px auto;
`;
export const Image = styled("img")`
  width: 100%;
  border-radius: 35px;
`;
export const VideoContainer = styled("div")`
  width: 100%;
  height: auto;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  video {
    border-radius: 35px;
  }
`;

export const TextStyled = styled("p")`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  span {
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const ListStyled = styled("ul")`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  span {
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const ButtonStyled = styled(NavLink)`
  display: block;
  width: 150px;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 50px;
  background-color: ${(p) => p.theme.bgc};
  color: ${(p) => p.theme.primary};
  cursor: pointer;
  padding: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.secondary};
  }
`;
