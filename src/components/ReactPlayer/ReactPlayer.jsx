import React, { useRef } from "react";
import { toast } from "react-toastify";
import {
  getProgressLocal,
  setLinkLocal,
  setProgressLocal,
} from "../../localStorage/localStorage";
import {
  ContainerStyled,
  ReactPlayerStyled,
  TitleStyled,
} from "./ReactPlayerStyled";

export const ReactPlayer = ({ lesson, lessonTitle, course }) => {
  const playerRef = useRef(null);

  const handlePlayerReady = () => {
    const progress = getProgressLocal(course, lesson);
    playerRef.current.seekTo(progress);
    setLinkLocal(course, lesson, lessonTitle);
    toast.info(`Now playing - ${lessonTitle}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleProgress = (progress) => {
    setProgressLocal(progress, course);
  };

  return (
    <ContainerStyled>
      <TitleStyled>{lessonTitle}</TitleStyled>
      <ReactPlayerStyled
        ref={playerRef}
        progressInterval={1000}
        onProgress={handleProgress}
        url={lesson}
        controls={true}
        width="100%"
        height="auto"
        title={lessonTitle}
        onReady={handlePlayerReady}
      />
    </ContainerStyled>
  );
};
