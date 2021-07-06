<h1 align="center">
  react-circular-progress-bar
</h1>

<p align="center">
React library to help developers to draw animated, cross-browser, highly customizable progress circles using SVG and plain JavaScript.

Also supports the IntersectionObserver API, which allows to start the animation only when the progress bar appears in the view.
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/tomik23/react-circular-progress-bar">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg">
  </a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tomik23/react-circular-progress-bar/main/circular-progress-bar.png">
</p>

## Demo
See the demo - [example](https://tomik23.github.io/react-circular-progress-bar/)

## Install

```bash
yarn add @tomik23/react-circular-progress-bar
# or
npm install @tomik23/react-circular-progress-bar
```

## Usage
```jsx
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar'
```

```jsx
// available control variables
const props = {
  percent: 60, // is require
  colorSlice: '#00a1ff',
  colorCircle: '#00a1ff',
  fontColor: '#365b74',
  fontSize: '1.6rem',
  fontWeight: 400,
  size: 200,
  stroke: 10,
  strokeBottom: 5,
  opacity: 10,
  round: true,
  number: true,
  linearGradient: ["#ffff00", "brown"]
}

<CircularProgressBar {...props} />
```
### Update percent
> If you want to update component you have to add `id` to each of them
```jsx
const config = {
  id: 0, // important
  percent: 50,
  colorSlice: '#E91E63',
}

function App() {
  const [update, setUpdate] = useState(config);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate({
        ...config,
        id: 0, // we indicate which component we want to change
        percent: Math.floor(Math.random() * 100 + 1),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const newObject = { ...config, ...update };

  return (
    <div>
      <CircularProgressBar {...newObject} />
    </div>
  );
}
```

## Configuration of the plugin

props | type | default | require | description
---- | :-------: | :-------: | :--------: | -----------
percent | number |  | ✔ | Represents the progress bar and animation of the animation progress expressed by a number e.g. 65%
id | number | | | If you want to update component you have to add `id` to each of them
colorSlice | string | `'#00a1ff'` | | Progress layer color and background ["#ffff00","brown" *](#colors-names)
colorCircle | string | `'#00a1ff'` | | Bottom circle color Font ["#ffff00","brown" *](#colors-names)
stroke | number | `10` |  | Stroke width, chart thickness
strokrBottom | number | `10` |  | If "strokBottom" is set, it is used to generate a background circle size
round | boolean | `false` |  | Path rounding
opacity | number | `10` |  | Opacity box-shadow, 10 = 1, 9 = 0.9 ... 1 = 0.1
number | boolean | `true` |  | Add props number and set to false to hide the number with percent
size | number | `200` |  | Size progress bar width and height in px
fontSize | string | `1.6rem` |  | Font size. The font can be shown in units rem, em, px ...
fontWeight | number | `400` |  | 400, 600, ...
fontColor | string | `'#365b74'` |  | Font color ["#ffff00","brown" *](#colors-names)
linearGradient | array |  |  | Array of colors "lineargradient": ["#ffff00","brown" *](#colors-names)

## Colors names

[* See colors names](https://htmlcolorcodes.com/color-names/)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Vivaldi |
| --------- | --------- | --------- | --------- | --------- |
| IE11+, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions