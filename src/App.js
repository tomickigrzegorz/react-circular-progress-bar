import { useState, useEffect } from 'react';
import CircularProgressBar from './components/CircularProgressBar';

const propsA = {
  percent: 70,
  colorSlice: "#E91E63",
}

const propsB = {
  linearGradient: ["yellow", "#ff0000"],
  round: true,
  percent: 66,
  colorSlice: "#4CAF50",
  colorCircle: "#e6e6e6"
}

const propsC = {
  percent: 55,
  colorSlice: "#CDDC39",
  colorCircle: "#f1f1f1",
}

const propsD = {
  percent: 60,
  colorSlice: "#000",
  colorCircle: "#e6e6e6",
  number: false
}

function App() {
  const [seconds, setSeconds] = useState(propsA);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds({ ...propsA, percent: Math.floor((Math.random() * 100) + 1) });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <CircularProgressBar {...seconds} />
      <CircularProgressBar {...propsB} />
      <CircularProgressBar {...propsC} />
      <CircularProgressBar {...propsD} />
    </div>
  );
}

export default App;