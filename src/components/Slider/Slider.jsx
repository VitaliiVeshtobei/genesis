import React, { useState } from "react";

import { ImageStyled, SliderStyled } from "./SliderStyled";

export const SliderLessons = ({ course, chooseLesson }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (currentSlide) => setActiveIndex(currentSlide),
  };
  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <SliderStyled {...settings}>
        {course?.lessons.map((les, idx) => (
          <div
            key={les.id}
            onClick={() =>
              chooseLesson({
                link: les.link,
                status: les.status,
                title: les.title,
              })
            }
          >
            <ImageStyled
              className={activeIndex === idx ? "active" : ""}
              onClick={() => handleSlideClick(idx)}
              src={`${les.previewImageLink + "/lesson-" + les.order + ".webp"}`}
              alt="foto"
              status={les.status}
            />
            <h3>{`${les.order}.  ${les.title}`}</h3>
          </div>
        ))}
      </SliderStyled>
    </div>
  );
};
