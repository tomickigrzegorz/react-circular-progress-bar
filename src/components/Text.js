const Text = ({ counter, fontSize, fontWeight, fontColor }) => {
  return (
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
}

export default Text;