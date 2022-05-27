# React Metro Tabs

windows phone style tabs in react.js

## Install

```bash
npm install --save react-metro-tabs
```

```bash
yarn add react-metro-tabs
```

## demo

![](./Assets/demo.gif)

## Example Usage

```jsx
import React, { Component } from "react";

import { MetroTabs, MetroTab } from "react-metro-tabs";

class Example extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid black",
          borderRadius: 10,
          height: 500,
          width: 360,
        }}
      >
        <MetroTabs onTabChange={(e) => console.log(e)}>
          <MetroTab title='tab1'>content1</MetroTab>
          <MetroTab title='tab2'>content2</MetroTab>
          <MetroTab title='tab3'>content3</MetroTab>
        </MetroTabs>
      </div>
    );
  }
}
```

## MetroTabs props

| Prop                     | Type     | Description                                  | Default  |
| ------------------------ | -------- | -------------------------------------------- | -------- |
| transitionDuration       | number   | Allow vertical drag scrolling                | 1000     |
| tabSpaces                | number   | string                                       | 70       |
| tabsColor                | string   | Hide the scrollbars                          | "#000"   |
| tabFontSize              | number   | string                                       | "2.5em"  |
| tabFontWeight            | number   | string                                       | "normal" |
| transitionTimingFunction | string   | Invoked when user scrolling container        |          |
| onTabChange              | Function | Invoked when user ends scrolling container   |          |
| children                 | Node     | Invoked when user starts scrolling container |          |

## License

The source code is licensed under MIT, all assets are copyrighted to their respective owner © [spnava](https://github.com/spnava)
This package uses react-hammerjs underhood
