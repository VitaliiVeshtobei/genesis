import React, { useRef } from "react";
import {
  getProgressLocal,
  setLinkLocal,
  setProgressLocal,
} from "../../localStorage/localStorage";
import { ReactPlayerStyled } from "./ReactPlayerStyled";

export const ReactPlayer = ({ lesson, lessonTitle, course }) => {
  const playerRef = useRef(null);

  const handlePlayerReady = () => {
    const progress = getProgressLocal(course, lesson);
    playerRef.current.seekTo(progress);
    setLinkLocal(course, lesson);
  };
  const handleProgress = (progress) => {
    setProgressLocal(progress, course);
  };

  return (
    <div>
      <ReactPlayerStyled
        ref={playerRef}
        progressInterval={10000}
        onProgress={handleProgress}
        url={lesson}
        controls={true}
        width="50%"
        height="auto"
        title={lessonTitle}
        onReady={handlePlayerReady}
      />
    </div>
  );
};
