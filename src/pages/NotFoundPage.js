import React from "react";

export const NotFoundPage = React.forwardRef((props, ref) => {
  return (
    <div>
      <header className="App-header">
        <p>Ooops... nothing here yet.</p>

        <p>
          Go to{" "}
          <a className="App-link" href="/">
            homepage
          </a>{" "}
          of Pankaj Vaghela
        </p>
      </header>
    </div>
  );
});
