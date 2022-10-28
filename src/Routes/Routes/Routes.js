import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/ChekcOut/CheckOut";
import Courses from "../../Pages/Courses/Courses";
import CourseTopic from "../../Pages/CourseTopic/CourseTopic";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import RightSide from "../../Pages/Shared/RightSide/RightSide";
import TermsAndConditions from "../../Pages/TermsAndCondition/TermsAndConditions";
import Topics from "../../Pages/Topics/Topics";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        loader: () =>
          fetch(`https://assignment-10-server-tan-two.vercel.app/topics/`),
      },
      {
        path: "/category/:id",
        element: <RightSide></RightSide>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-tan-two.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/category/:id",
        element: <CourseTopic></CourseTopic>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-tan-two.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/category/:id",
        element: <RightSide></RightSide>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-tan-two.vercel.app/topics/${params.id}`
          ),
      },

      {
        path: "/topics/:id",
        element: <Topics></Topics>,
        loader: ({ params }) => {
          return fetch(
            `https://assignment-10-server-tan-two.vercel.app/topics/${params.id}`
          );
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
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
