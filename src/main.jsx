import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Stopwatch from "./routes/stopwatch";
import Timer from "./routes/timer";
import Music from "./routes/music";
import Options from "./routes/options";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "timer",
    element: <Timer />,
  },
  {
    path: "music",
    element: <Music />,
  },
  {
    path: "options",
    element: <Options />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
