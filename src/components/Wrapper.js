import React, { useContext } from "react";
import { PropsContext } from "./Provider";

const Wrapper = ({ children }) => {
  let { id, size, counter } = useContext(PropsContext);
  return (
    <svg
      role="progressbar"
      width={size}
      height={size}
      data-index={id}
      viewBox="0 0 100 100"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={counter}
      aria-labelledby="circular progress bar">
      {children}
    </svg>
  );
};

export default Wrapper;
