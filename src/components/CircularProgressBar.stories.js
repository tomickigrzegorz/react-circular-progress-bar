import React from 'react';

import CircularProgressBar from './CircularProgressBar';

const styleObj = {
  display: 'flex',
  justifyContent: 'center',
  padding: '40px',
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji'
}

export default {
  title: 'Example/CircularProgressBar',
  component: CircularProgressBar,
  decorators: [(Story) => <div style={styleObj}><Story /></div>]
};

const Template = (args) => <CircularProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  percent: 73,
  colorSlice: "#E91E63"
};

export const linearGradient = Template.bind({});
linearGradient.args = {
  percent: 70,
  round: true,
  colorSlice: "#4CAF50",
  colorCircle: "#e6e6e6",
  linearGradient: ["yellow", "#ff0000"],
};

export const Simple = Template.bind({});
Simple.args = {
  percent: 55,
  colorSlice: "#CDDC39",
  colorCircle: "#f1f1f1",
  fontWeight: 100
};

export const WithoutNumber = Template.bind({});
WithoutNumber.args = {
  percent: 60,
  colorSlice: "#000",
  colorCircle: "#e6e6e6",
  number: false
};