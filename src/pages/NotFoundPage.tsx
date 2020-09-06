import React from "react";
import { RouteComponentProps } from "@reach/router";

type NotFoundPageProps = {} & RouteComponentProps;

export const NotFoundPage: React.FC<NotFoundPageProps> = React.forwardRef(
  (props, ref) => {
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
  }
);
