import React from "react";
import { Router } from "@reach/router";
import { HomePage } from "../pages/home/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { DicePage } from "../pages/playground/DicePage";

export const AppRouter = React.forwardRef((props, ref) => {
  return (
    <Router>
      <HomePage path="/" />
      <DicePage path="/dice" />
      <NotFoundPage default />
    </Router>
  );
});
