import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Play from "../pages/Play";
import Score from "../pages/Score";
import Layout from "../components/layout/Layout";
import "./router.scss";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/score" element={<Score />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
