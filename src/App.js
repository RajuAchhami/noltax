import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/Home";
import About from "./features/About";
import RootLayout from "./ui/RootLayout";
import NotFound from "./ui/NotFound";
import Carousel from "./features/Carousel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "about", element: <About /> },
      { path: "carousel", element: <Carousel /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
