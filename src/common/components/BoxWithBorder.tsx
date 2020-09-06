import React from "react";
// import "./BoxWithBorder.scss";

interface BoxWithBorderProps {}

export const BoxWithBorder: React.FC<BoxWithBorderProps> = React.forwardRef(
  (props, ref) => {
    return (
      <div
        className="boxWithBorder"
        style={{
          border: "1px solid aquamarine",
          borderRadius: "5px",
          padding: "10px 20px",
        }}
      >
        {props.children}
      </div>
    );
  }
);
