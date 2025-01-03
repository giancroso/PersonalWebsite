import { Routes, Route } from "react-router";
import HomePage from "../pages/home";
import AboutMePage from "../pages/aboutMe";
import BlogPage from "../pages/blog";

export default function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutMePage />} />
      <Route path="blog" element={<BlogPage />} />
    </Routes>
  );
}
