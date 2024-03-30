import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import MainPage from "../pages/main";
import ListPage from "../pages/list";
import WritePage from "../pages/write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/", element: <MainPage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/write", element: <WritePage /> },
      { path: "/edit", element: <WritePage /> },
    ],
  },
]);

export default router;
