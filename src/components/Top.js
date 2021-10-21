import React, { useContext } from "react";
import { PropsContext } from "./Provider";

import GradientLinear from "./GradientLinear";

const Top = () => {
  let {
    id,
    rotation,
    linearGradient,
    animationSmooth,
    inverse,
    counter,
    stroke,
    round,
    cut,
    colorSlice
  } = useContext(PropsContext);

  const gradient =
    linearGradient !== undefined
      ? `url(#linear-gradient-${id || 0})`
      : colorSlice;

  const getDashOffset = (counter, cut, inverse) => {
    const cutChar = cut ? (264 / 100) * (100 - cut) : 264;
    const angle = 264 - (counter / 100) * cutChar;

    return inverse ? -angle : angle;
  };

  const smoothAnimation =
    animationSmooth !== undefined
      ? { transition: `stroke-dashoffset ${animationSmooth}` }
      : "";

  return (
    <>
      {linearGradient && (
        <GradientLinear index={id} linearGradient={linearGradient} />
      )}
      <circle
        cx="50%"
        cy="50%"
        r="42"
        shapeRendering="geometricPrecision"
        fill="none"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "50% 50%",
          ...smoothAnimation
        }}
        stroke={gradient}
        strokeWidth={stroke}
        strokeLinecap={round ? "round" : "butt"}
        strokeDashoffset={getDashOffset(counter, cut, inverse)}
        strokeDasharray={264}
      />
    </>
  );
};

export default Top;
