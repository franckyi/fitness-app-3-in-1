import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Stopwatch from "./routes/stopwatch";
import About from "./routes/about";

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
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
