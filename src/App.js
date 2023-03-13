import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Courses />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
