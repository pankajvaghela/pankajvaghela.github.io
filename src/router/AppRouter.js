import React, { useEffect } from "react";
import { Router } from "@reach/router";
import { HomePage } from "../pages/home/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRouter = React.forwardRef((props, ref) => {
  return (
    <Router>
      <HomePage path="/" />

      <NotFoundPage default />
    </Router>
  );
});
