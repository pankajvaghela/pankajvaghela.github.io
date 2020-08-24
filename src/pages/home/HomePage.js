import React from "react";
import logo from "../../common/icons/logo.svg";
import { getQueryVariable } from "../../common/utils/url";
import { useNavigate } from "@reach/router";

export const HomePage = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const route = getQueryVariable("route");
    if (route) {
      navigate(route);
    }
  }, [navigate]);

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the <code>world</code> of
        </p>
        <a
          className="App-link"
          href="https://github.com/pankajvaghela"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pankaj Vaghela
        </a>
      </header>
    </div>
  );
});
