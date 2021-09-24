import React, { useContext } from "react";
import { PropsContext } from "./Provider";

const Background = () => {
  let {
    stroke,
    fill,
    round,
    inverse,
    strokeBottom,
    cut,
    rotation,
    colorCircle,
    strokeDasharray
  } = useContext(PropsContext);

  const dashoffset = 264 - (100 - cut) * 2.64;

  return (
    <circle
      cx="50"
      cy="50"
      r="42"
      shapeRendering="geometricPrecision"
      fill={fill}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "50% 50%"
      }}
      stroke={colorCircle}
      strokeWidth={strokeBottom || stroke}
      strokeLinecap={round && !strokeDasharray ? "round" : "butt"}
      strokeDashoffset={inverse ? -dashoffset : dashoffset}
      strokeDasharray={cut ? 264 : strokeDasharray}
    />
  );
};

export default Background;
