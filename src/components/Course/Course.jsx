import React, { useState } from "react";
import { Image } from "./CourseStyles";
import ReactPlayer from "react-player";
export const Course = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // console.log(data.meta.courseVideoPreview.link);

  function handleMouseEnter(data) {
    setIsPlaying(true);
  }

  function handleMouseLeave() {
    setIsPlaying(false);
  }
  return (
    <div>
      <h2>{data.title}</h2>
      <Image src={`${data.previewImageLink}/cover.webp`} alt="foto" />
      <p>{data.description}</p>
      <p>Number of lessons: {data.lessonsCount}</p>
      <ul>
        Skills:
        {data.meta.skills?.map((skill, idx) => (
          <li key={skill}>{`${idx + 1}. ${skill}`}</li>
        ))}
      </ul>
      <p>Rating: {data.rating}</p>
      <div
      // style={{ backgroundColor: "red" }}
      // onMouseEnter={() =>
      //   handleMouseEnter(data.meta.courseVideoPreview?.link)
      // }
      // onMouseLeave={handleMouseLeave}
      >
        {/* {isPlaying ? (
          <ReactPlayer
            url={data.meta.courseVideoPreview.link}
            playing={isPlaying}
            controls={false}
            width="100%"
            height="100%"
            muted
          />
        ) : (
          <img
            style={{ width: "100%", height: "200px" }}
            src={`${data.meta.courseVideoPreview.previewImageLink}/cover.webp`}
            alt="foto"
          />
        )} */}
        {/* <img
          style={{ width: "100%", height: "200px" }}
          src={`${data.meta.courseVideoPreview.previewImageLink}/cover.webp`}
          alt="foto"
        /> */}
      </div>
    </div>
  );
};
