import styled from "styled-components";
import ReactPlayer from "react-player";

export const ImageContainer = styled("div")`
  /* width: 640px; */
  /* height: 200px; */
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
    border: 1px solid black;
    border-radius: 50px;
  }
`;

export const TextContainer = styled("div")`
  float: left;
`;

export const TextStyled = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  span {
    font-weight: bold;
    margin-right: 10px;
  }
`;
