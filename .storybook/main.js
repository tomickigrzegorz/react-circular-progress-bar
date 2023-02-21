module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/preset-create-react-app"
  ]
};
