import { Routes, Route } from "react-router";
import HomePage from "../pages/home";
import ResumePage from "../pages/resume";
import BlogPage from "../pages/blog";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="blog" element={<BlogPage />} />
    </Routes>
  );
}

export default Router;
