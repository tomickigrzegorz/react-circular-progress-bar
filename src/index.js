import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CircularProgressBar from './components/CircularProgressBar';

const props = {
  percent: 70,
  colorSlice: "#E91E63",
}

// const props = {
//   round: true,
//   percent: 70,
//   colorSlice: "#4CAF50",
//   colorCircle: '#e6e6e6',
//   linearGradient: ["yellow", "#ff0000"]
// }

// const props = {
//   percent: 55,
//   colorSlice: "#CDDC39",
//   colorCircle: "#f1f1f1",
//   fontWeight: 100
// }

// without number
// const props = {
//   percent: 60,
//   colorSlice: "#000",
//   colorCircle: "#e6e6e6",
//   number: false
// }

ReactDOM.render(
  <CircularProgressBar {...props} />,
  document.getElementById('root')
);