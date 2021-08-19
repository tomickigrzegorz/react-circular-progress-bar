import React, { useContext } from "react";
import { PropsContext } from "./Provider";

const GradientLinear = ({ index }) => {
  let { linearGradient } = useContext(PropsContext);

  let number = -100;
  let id = `linear-gradient-${index}`;
  return (
    <defs>
      <linearGradient id={id}>
        {linearGradient.map((gradient, index) => {
          number += 100;
          return (
            <stop
              key={index}
              offset={number / (linearGradient.length - 1) + "%"}
              stopColor={gradient}></stop>
          );
        })}
      </linearGradient>
    </defs>
  );
};

export default GradientLinear;
