import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { getLesson } from "../../axios/axios";
import { SliderContainer, TitleStyled } from "./LessonStyled";
import { LearningSpinner } from "../../components/Spinner/LearningSpiner";
import { SliderLessons } from "../../components/Slider/Slider";
import { ReactPlayer } from "../../components/ReactPlayer/ReactPlayer";
import { setLocalStorageCourse } from "../../localStorage/localStorage";

export const Lesson = () => {
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [lessonTitle, setLessonTitle] = useState(null);

  const [loading, setLoading] = useState(false);

  const { lessonId } = useParams();

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const result = await getLesson(lessonId);
      const savedLesson = localStorage.getItem("lesson");
      setLocalStorageCourse(result);
      // console.log(savedLesson);
      // if (savedLesson) {
      //   setCurrentLesson(savedLesson);
      // }
      savedLesson !== "null" && savedLesson
        ? setLesson(savedLesson)
        : setLesson(result.lessons[0].link);
      // setLesson(result.lessons[0].link);
      setCourse(result);

      setLoading(false);
    };
    data();
  }, [lessonId]);
  console.log(lesson);

  const chooseLesson = ({ link, status, title }) => {
    if (status === "locked") {
      toast.error("Sorry, but this video locked!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    setLesson(link);
    setLessonTitle(title);
  };

  return (
    <div>
      <TitleStyled>{course?.title}</TitleStyled>
      {loading ? (
        <LearningSpinner />
      ) : (
        <div>
          <ReactPlayer lesson={lesson} lessonTitle={lessonTitle} />
          <SliderContainer>
            <SliderLessons course={course} chooseLesson={chooseLesson} />
          </SliderContainer>
        </div>
      )}
    </div>
  );
};
