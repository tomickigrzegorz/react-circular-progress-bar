const GradientLinear = ({ linearGradient }) => {
  let number = -100;
  return (
    <defs>
      <linearGradient id="linear-gradient">
        {linearGradient.map((gradient, index) => {
          number += 100;
          return <stop key={index} offset={number / (linearGradient.length - 1) + '%'} stopColor={gradient}></stop>
        })}
      </linearGradient>
    </defs>
  );
}

const CircleTop = (props) => {
  const { linearGradient, counter, stroke, round, colorSlice } = props;
  const dasharray = counter * 2.64 + ', 20000';
  const gradient = linearGradient !== undefined ? "url(#linear-gradient)" : colorSlice

  return (
    <>
      {linearGradient && <GradientLinear linearGradient={linearGradient} />}
      <circle
        cx="50"
        cy="50"
        r="42"
        shapeRendering="geometricPrecision"
        fill="none"
        transform="rotate(-90, 50, 50)"
        stroke={gradient}
        strokeWidth={stroke}
        strokeLinecap={round ? 'round' : ''}
        strokeDasharray={dasharray}
      >
      </circle>
    </>
  )
}

export default CircleTop;