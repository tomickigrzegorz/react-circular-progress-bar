import React, { memo } from 'react';

const CircleBackground = memo(({ stroke, colorCircle }) => {
  return (
    <circle
      cx="50"
      cy="50"
      r="42"
      shapeRendering="geometricPrecision"
      fill="none"
      stroke={colorCircle}
      strokeWidth={stroke}>
    </circle>
  )
})

export default CircleBackground;