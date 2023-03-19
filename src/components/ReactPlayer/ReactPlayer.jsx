import React, { useState, useEffect, useRef } from "react";
import { ReactPlayerStyled } from "./ReactPlayerStyled";

export const ReactPlayer = ({ lesson, lessonTitle }) => {
  const [progress, setProgress] = useState(0);
  //   const [currentLesson, setCurrentLesson] = useState("");
  const playerRef = useRef(null);

  useEffect(() => {
    const savedProgress = localStorage.getItem("videoProgress");
    // const savedLesson = localStorage.getItem("lesson");

    // if (savedLesson) {
    //   setCurrentLesson(savedLesson);
    // }
    lesson && localStorage.setItem("lesson", lesson);
    const lessInfo = { progress, lessonTitle };

    localStorage.setItem("lesson-info", JSON.stringify(lessInfo));

    if (savedProgress) {
      setProgress(parseFloat(savedProgress));
      playerRef.current.seekTo(parseFloat(savedProgress));
    }
  }, [lesson]);

  const handlePlayerReady = () => {
    playerRef.current.seekTo(progress);
  };
  const handleProgress = (progress) => {
    localStorage.setItem("videoProgress", progress.playedSeconds);
    const obj = localStorage.getItem("lesson-info");
    const newProgress = {
      ...JSON.parse(obj),
      progress: progress.playedSeconds,
    };

    localStorage.setItem("lesson-info", JSON.stringify(newProgress));
  };
  return (
    <div>
      <ReactPlayerStyled
        ref={playerRef}
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
