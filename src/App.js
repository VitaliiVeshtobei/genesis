import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Layout from "./components/Layout/Layout";
import { Lesson } from "./pages/Lesson/Lesson";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/courses" element={<Courses />}></Route>
          <Route path="/lesson/:lessonId" element={<Lesson />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
