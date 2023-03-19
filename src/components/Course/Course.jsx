import React, { useState } from "react";

import {
  Image,
  StyledReactPlayer,
  ImageContainer,
  VideoContainer,
  TextStyled,
  ListStyled,
  ButtonStyled,
} from "./CourseStyled";

export const Course = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleMouseEnter(data) {
    setIsPlaying(true);
  }

  function handleMouseLeave() {
    setIsPlaying(false);
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <ImageContainer>
        {!isPlaying ? (
          <Image
            src={`${data.previewImageLink}/cover.webp`}
            alt="foto"
            onMouseEnter={handleMouseEnter}
          />
        ) : (
          <VideoContainer onMouseLeave={handleMouseLeave}>
            <StyledReactPlayer
              url={data?.meta?.courseVideoPreview?.link}
              playing={isPlaying}
              controls={false}
              muted
              width="100%"
              height="auto"
            />
          </VideoContainer>
        )}
      </ImageContainer>

      <div>
        <TextStyled>
          <span>Description:</span> {data.description}
        </TextStyled>
        <TextStyled>
          <span>Number of lessons:</span> {data.lessonsCount}
        </TextStyled>
        <ListStyled>
          <span>Skills:</span>
          {data.meta.skills?.map((skill, idx) => (
            <li key={skill}>{`${idx + 1}. ${skill}`}</li>
          ))}
        </ListStyled>
        <TextStyled>
          <span>Rating:</span> {data.rating}
        </TextStyled>
      </div>
      <ButtonStyled to={`/course/${data.id}`}>Go to lesson</ButtonStyled>
    </div>
  );
};
