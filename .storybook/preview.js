import "intersection-observer";
import "../src/index.css";

export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "light"
  },
  docs: {
    source: {
      excludeDecorators: true
    }
  }
};
