import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
//main Layout
const MainLayouts = lazy(() => import("../layout/MainLayout"));
/* pages*/
const Home = lazy(() => import("../pages/Home"));
const Courses = lazy(() => import("../pages/Courses"));
const CourseDetails = lazy(() => import("../pages/CourseDetails"));

import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courseDetails",
        element: <CourseDetails />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
