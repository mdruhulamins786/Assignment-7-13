import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendsDetails from "../ui/FriendsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friend/:id",
        element: <FriendsDetails />,
      },
    ],
  },
]);

export default router;
