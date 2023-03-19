export const addToArrayLocal = (newCourse) => {
  const data = JSON.parse(localStorage.getItem("course-info"));
  data.push(newCourse);
  localStorage.setItem("course-info", JSON.stringify(data));
};

export const setLocalStorageCourse = ({ title, lessons }) => {
  const courseInfo = [];
  const data = {
    course: title,
    lesson: { link: lessons[0].link, progress: 0 },
  };
  courseInfo.push(data);
  localStorage.setItem("course-info", JSON.stringify(courseInfo));
};

export const getLocalStorageCourse = () => {
  const data = localStorage.getItem("course-info");
  return data;
};

export const setLessonLink = (
  savedCourseLocal,
  result,
  setLesson,
  setLessonTitle
) => {
  if (!savedCourseLocal) {
    setLesson(result.lessons[0].link);
    setLessonTitle(result.lessons[0].title);
    setLocalStorageCourse(result);
    return;
  }
  const localDataCourse = JSON.parse(savedCourseLocal).filter(
    (course) => course.course === result.title
  );

  if (localDataCourse.length && localDataCourse[0].lesson.link) {
    setLesson(localDataCourse[0].lesson.link);
    return;
  }
  if (!localDataCourse.length) {
    const data = {
      course: result.title,
      lesson: { link: result.lessons[0].link, progress: 0 },
    };
    setLesson(result.lessons[0].link);
    setLessonTitle(result.lessons[0].title);
    addToArrayLocal(data);
  }
};

export const setProgressLocal = ({ playedSeconds }, { title }) => {
  const data = JSON.parse(getLocalStorageCourse());
  const index = data.findIndex((itm) => itm.course === title);

  data[index].lesson.progress = playedSeconds;
  localStorage.setItem("course-info", JSON.stringify(data));
};

export const getProgressLocal = ({ title }, link) => {
  const data = JSON.parse(getLocalStorageCourse());

  const { lesson } = data.find((itm) => itm.course === title);

  if (lesson.link === link) {
    return lesson.progress;
  }
  return 0;
};

export const setLinkLocal = ({ title }, link) => {
  const data = JSON.parse(getLocalStorageCourse());
  const index = data.findIndex((itm) => itm.course === title);
  data[index].lesson.link = link;
  localStorage.setItem("course-info", JSON.stringify(data));
};
