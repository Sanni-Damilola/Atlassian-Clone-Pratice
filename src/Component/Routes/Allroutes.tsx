import React from "react";
import { useRoutes } from "react-router-dom";
import Homescreen from "../Homescreen/Homescreen";
import Product from "../Product/Product";
import Video from "../Videos/Video";

const Allroutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/product",
      element: <Product />,
    },
  ]);

  return routes;
};

export default Allroutes;
