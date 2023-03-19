import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Layout from "./components/Layout/Layout";
import { Course } from "./pages/Course/Course";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Courses />}></Route>
          <Route path="/course/:courseId" element={<Course />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
