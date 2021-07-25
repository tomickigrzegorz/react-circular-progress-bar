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
    animationOff: true,
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
    inverse: true,
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

const images = [
  {
    id: 6,
    percent: 55,
    colorSlice: '#CDDC39',
    colorCircle: '#f1f1f1',
    fontWeight: 100,
    fontSize: '1rem',
    textPosition: '1.5em',
  },
  {
    id: 7,
    percent: 75,
    colorSlice: '#ffc107',
    colorCircle: '#e6e6e6',
    fontWeight: 100,
    fontSize: '1rem',
    textPosition: '1.5em',
  },
  {
    id: 8,
    percent: 85,
    colorSlice: '#00bcd4',
    colorCircle: '#e6e6e6',
    fontWeight: 100,
    fontSize: '1rem',
    textPosition: '1.5em',
  },
];

const imagesWithText = [
  {
    id: 6,
    percent: 55,
    colorSlice: '#CDDC39',
    colorCircle: '#f1f1f1',
    number: false,
  },
  {
    id: 7,
    percent: 75,
    colorSlice: '#ffc107',
    colorCircle: '#e6e6e6',
    fontWeight: 100,
    number: false,
  },
  {
    id: 8,
    percent: 85,
    colorSlice: '#00bcd4',
    colorCircle: '#e6e6e6',
    fontWeight: 100,
    number: false,
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
    animationOff: true,
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
        {images.map((props, index) => {
          return (
            <CircularProgressBar key={index} {...props}>
              <img
                src="https://picsum.photos/100/100"
                style={{
                  width: '60px',
                  borderRadius: '50%',
                  marginTop: '-40px',
                  padding: '2px',
                  border: '3px solid salmon',
                }}
                alt="Random"
              />
            </CircularProgressBar>
          );
        })}
      </section>
      <section>
        {imagesWithText.map((props, index) => {
          return (
            <CircularProgressBar key={index} {...props}>
              <img
                src="https://picsum.photos/100/100"
                style={{
                  width: '60px',
                  borderRadius: '50%',
                  padding: '2px',
                  border: '2px solid black',
                }}
                alt="Images with text"
              />
              <div style={{ textAlign: 'center', padding: '0 35px' }}>
                Lorem, ipsum dolor.
              </div>
            </CircularProgressBar>
          );
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
