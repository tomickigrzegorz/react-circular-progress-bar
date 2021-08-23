import React, { useContext } from "react";
import { PropsContext } from "./Provider";

const Text = () => {
  let {
    id,
    unit,
    number,
    counter,
    textPosition,
    fontSize,
    fontWeight,
    fontColor
  } = useContext(PropsContext);

  return number ? (
    <text
      x="50%"
      y="50%"
      fontSize={fontSize}
      fontWeight={fontWeight}
      fill={fontColor}
      textAnchor="middle"
      dy={textPosition} // fixed issue with centering text vertical
    >
      <tspan className={`circular-percent-${id}`}>{counter}</tspan>
      <tspan className={`circular-unit-${id}`}>{unit}</tspan>
    </text>
  ) : null;
};

export default Text;
