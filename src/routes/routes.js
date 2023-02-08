import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/Shared/RecipeDetails";
import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: "/recipe/:id", element: <RecipeDetails /> },
    ],
  },
]);

export default routes;
