import React, { useContext } from 'react';
import { PropsContext } from './Provider';

const Text = () => {
  let { id, number, counter, textPosition, fontSize, fontWeight, fontColor } =
    useContext(PropsContext);

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
      {counter}
      <tspan className={`circular-tspan-${id || 0}`}>%</tspan>
    </text>
  ) : null;
};

export default Text;
