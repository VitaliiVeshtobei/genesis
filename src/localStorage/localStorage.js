export const setLocalStorageCourse = ({ title }) => {
  const data = { course: title, lesson: { link: "", progress: 0 } };

  localStorage.setItem("course-info", JSON.stringify(data));
};
