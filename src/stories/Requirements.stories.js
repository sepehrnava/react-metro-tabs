import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import { MetroTabs, MetroTab } from "../components/react-metro-tabs/MetroTabs";
import "./styles.css";
import Readme from "./readme.mdx";
import Code from "./code.mdx";
import ComponentProps from "./componentProps.mdx";

const stories = storiesOf("React Metro Tabs", module);

stories.add("Introduction", () => {
  // const [tabSpaces, setTabSpaces] = useState(100);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTabSpaces(500);
  //   }, 3000);
  // }, []);

  const onTabChange = (e) => {
    console.log(e);
  };

  return (
    <>
      <Readme />
      <div
        style={{
          border: "7px solid #000",
          borderRadius: 30,
          height: 650,
          width: 360,
          backgroundColor: "#444",
        }}
      >
        <MetroTabs
          // transitionDuration={10000}
          // tabSpaces={tabSpaces}
          tabsColor='#fff'
          // tabFontWeight='bold'
          // tabFontSize={20}
          // transitionTimingFunction='linear'
          onTabChange={onTabChange}
        >
          not rendered
          <MetroTab title='Introduction'>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                color: "#fff",
                fontSize: "2.2em",
                maxWidth: "80%",
                paddingTop: 70,
                color: "antiquewhite",
                paddingLeft: 20,
              }}
            >
              Windows Phone Metro Theme Was Awesome!
            </div>
          </MetroTab>
          <MetroTab title='Problem'>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                color: "#fff",
                fontSize: "2.2em",
                paddingTop: 70,
                color: "#ff6e00",
                maxWidth: "80%",
                paddingLeft: 20,
              }}
            >
              But unfortunately, it is not between us anymore.
            </div>
          </MetroTab>
          <MetroTab title='Solution'>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                color: "#fff",
                fontSize: "2.2em",
                paddingTop: 70,
                color: "#00f6ff",
                maxWidth: "80%",
                paddingLeft: 20,
              }}
            >
              However, you can use this package to bring a taste of it into your
              react.js application.
            </div>
          </MetroTab>
          <MetroTab title='Have Fun'>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                color: "#fff",
                fontSize: "2.2em",
                paddingTop: 70,
                color: "#00ffa6",
                maxWidth: "80%",
                paddingLeft: 20,
              }}
            >
              Have fun and send us some feedbacks!
            </div>
          </MetroTab>
        </MetroTabs>
      </div>
      <Code />
    </>
  );
});

stories.add("Component Props", () => {
  return (
    <>
      <ComponentProps />
    </>
  );
});
