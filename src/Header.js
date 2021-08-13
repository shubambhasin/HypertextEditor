import React from "react";

export const Header = ({ modal }) => {
  return (
    <div className="flex p1rem jcsb aic gap-2">
      <h1 className="h2 t-center">
        HyperText Editor{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      {/* // toggles the how to use modal on homepage  */}
      <span class="how-to-use pointer" onClick={() => modal((value) => !value)}>
        How to use ?
      </span>
    </div>
  );
};
