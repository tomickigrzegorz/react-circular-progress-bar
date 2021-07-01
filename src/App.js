import { useState, useEffect } from 'react';
// import './App.css';
import CircularProgressBar from './components/CircularProgressBar';

const props2 = {
  round: true,
  percent: 70,
  colorSlice: "#4CAF50",
  colorCircle: '#e6e6e6',
  linearGradient: ["yellow", "#ff0000"]
}

const props3 = {
  percent: 55,
  colorSlice: "#CDDC39",
  colorCircle: "#f1f1f1",
  fontWeight: 100
}

// without number
const props4 = {
  percent: 60,
  colorSlice: "#000",
  colorCircle: "#e6e6e6",
  number: false
}

function App() {
  const [seconds, setSeconds] = useState({
    percent: 70,
    colorSlice: "#E91E63",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds({
        percent: Math.floor((Math.random() * 100) + 1),
        colorSlice: "#E91E63"
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // console.log(seconds);

  return (
    <div className="container">
      <CircularProgressBar {...seconds} />
      <CircularProgressBar {...props2} />
      <CircularProgressBar {...props3} />
      <CircularProgressBar {...props4} />
    </div>
  );
}

export default App;
