import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import LeftSide from "../../Pages/Shared/LeftSide/LeftSide";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import RightSide from "../../Pages/Shared/RightSide/RightSide";
import TermsAndConditions from "../../Pages/TermsAndCondition/TermsAndConditions";
import Topics from "../../Pages/Topics/Topics";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/topics/`),
      },
      {
        path: "/category/:id",
        element: <RightSide></RightSide>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },

      {
        path: "/topics/:id",
        element: <Topics></Topics>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/topics/${params.id}`);
        },
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);
