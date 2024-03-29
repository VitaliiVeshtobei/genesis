import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { getLesson } from "../../axios/axios";
import { SliderContainer, TitleStyled, ButtonStyled } from "./CourseStyled";
import { LearningSpinner } from "../../components/Spinner/LearningSpiner";
import { SliderLessons } from "../../components/Slider/Slider";
import { ReactPlayer } from "../../components/ReactPlayer/ReactPlayer";
import {
  getLocalStorageCourse,
  setLessonLink,
} from "../../localStorage/localStorage";

export const Course = () => {
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [lessonTitle, setLessonTitle] = useState(null);

  const [loading, setLoading] = useState(false);

  const { courseId } = useParams();

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const result = await getLesson(courseId);

      const savedCourseLocal = getLocalStorageCourse();

      setCourse(result);
      setLessonLink(savedCourseLocal, result, setLesson, setLessonTitle);
      setLoading(false);
    };
    data();
  }, [courseId]);

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
          <ButtonStyled type="button" onClick={handleGoBack}>
            To courses
          </ButtonStyled>
          <ReactPlayer
            lesson={lesson}
            lessonTitle={lessonTitle}
            course={course}
          />
          <SliderContainer>
            <SliderLessons course={course} chooseLesson={chooseLesson} />
          </SliderContainer>
        </div>
      )}
    </div>
  );
};
