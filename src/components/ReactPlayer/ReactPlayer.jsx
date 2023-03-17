import React, { useState, useEffect, useRef } from "react";
import { ReactPlayerStyled } from "./ReactPlayerStyled";
export const ReactPlayer = ({ lesson, lessonTitle }) => {
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const savedProgress = localStorage.getItem("videoProgress");
    if (savedProgress) {
      setProgress(parseFloat(savedProgress));
      playerRef.current.seekTo(parseFloat(savedProgress));
    }
  }, []);
  console.log(progress);
  console.log(playerRef.current);

  //   const handleProgress = (progress) => {
  //     console.log(progress);
  //     setProgress(progress.played);
  //     localStorage.setItem("videoProgress", progress.played);
  //   };
  return (
    <div>
      <ReactPlayerStyled
        // ref={playerRef}
        // onProgress={handleProgress}
        url={lesson}
        controls={true}
        width="50%"
        height="auto"
        title={lessonTitle}
        // startTime={30}
      />
    </div>
  );
};
