import React, { useState, useEffect } from 'react';
import CircularProgressBar from './components/CircularProgressBar';

const defaults = [
  {
    id: 0,
    percent: 50,
    colorSlice: '#E91E63',
  },
  {
    id: 1,
    percent: 60,
    colorSlice: '#ffc107',
  },
  {
    id: 2,
    percent: 70,
    colorSlice: '#00bcd4',
  },
];

const lineargradient = [
  {
    id: 3,
    linearGradient: ['yellow', '#ff0000'],
    round: true,
    percent: 70,
    colorCircle: '#e6e6e6',
  },
  {
    id: 4,
    linearGradient: ['#ff0000', '#9c27b0'],
    round: true,
    percent: 80,
    colorCircle: '#e6e6e6',
  },
  {
    id: 5,
    linearGradient: ['#ff0000', 'yellow'],
    round: true,
    percent: 90,
    colorCircle: '#e6e6e6',
  },
];

const simple = [
  {
    id: 6,
    percent: 55,
    colorSlice: '#CDDC39',
    colorCircle: '#f1f1f1',
    fontWeight: 100,
  },
  {
    id: 7,
    percent: 75,
    colorSlice: '#ffc107',
    colorCircle: '#e6e6e6',
    fontWeight: 100,
  },
  {
    id: 8,
    percent: 85,
    colorSlice: '#00bcd4',
    colorCircle: '#e6e6e6',
    fontWeight: 100,
  },
];

const withoutNumber = [
  {
    id: 9,
    percent: 60,
    colorSlice: '#000',
    colorCircle: '#e6e6e6',
    number: false,
  },
  {
    id: 10,
    percent: 70,
    colorSlice: '#ffc107',
    colorCircle: '#e6e6e6',
    number: false,
  },
  {
    id: 11,
    percent: 80,
    colorSlice: '#00bcd4',
    colorCircle: '#e6e6e6',
    number: false,
  },
];

function App() {
  const [first, setFirst] = useState(defaults[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirst({
        ...defaults[0],
        id: 0,
        percent: Math.floor(Math.random() * 100 + 1),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <section>
        {defaults.map((props, index) => {
          const newObject = index === first.id ? { ...props, ...first } : props;
          return <CircularProgressBar key={index} {...newObject} />;
        })}
      </section>
      <section>
        {lineargradient.map((props, index) => {
          return <CircularProgressBar key={index} {...props} />;
        })}
      </section>
      <section>
        {simple.map((props, index) => {
          return <CircularProgressBar key={index} {...props} />;
        })}
      </section>
      <section>
        {withoutNumber.map((props, index) => {
          return <CircularProgressBar key={index} {...props} />;
        })}
      </section>
    </div>
  );
}

export default App;
