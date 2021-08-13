import React from "react";

export const Header = ({ modal }) => {
  return (
    <div className="aic gap-2">
      <h1 className="h1 t-center">
        HyperText Editor{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <span class="how-to-use pointer" onClick={() => modal((value) => !value)}>
        How to use ?
      </span>
    </div>
  );
};
