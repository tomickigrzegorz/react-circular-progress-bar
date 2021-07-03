import React, { memo } from 'react';

const CircleText = memo(({ number, counter, fontSize, fontWeight, fontColor }) => {
  return number
    ? (
      <text
        x="50%"
        y="50%"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fontColor}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {counter}%
      </text>
    )
    : null;
})

export default CircleText;