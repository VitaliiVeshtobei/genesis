import axios from "axios";

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkNTI1NWFmYi0wZjdiLTQzYzEtYTNlYi04NDhjMmRiOWQ4MTQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3OTA5OTcsImV4cCI6MTY3OTY5MDk5N30.Lm2XZst7dDe06Jgtc9aWG-yfYtRnOFWzJ24UH9xMZLw";
const instance = axios.create({
  baseURL: "https://api.wisey.app/api/v1/core/preview-courses",

  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getCourses = async () => {
  try {
    const data = await instance.get();
    return data.data.courses;
  } catch (error) {
    console.log(error);
  }
};

export const getLesson = async (id) => {
  try {
    const data = await instance.get(id);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
