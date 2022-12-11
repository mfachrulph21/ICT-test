import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import StatisticsPage from "../pages/Statistics";
import UserPostsPage from "../pages/userPosts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<StatisticsPage />} />
      <Route path="/posts" element={<UserPostsPage />} />
    </Route>
  )
);

export default router;
