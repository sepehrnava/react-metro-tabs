import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import { MetroTabs, MetroTab } from "../components/react-metro-tabs/MetroTabs";
// import { FpsView } from "react-fps";

const stories = storiesOf("App Test", module);

stories.add("Hero", () => {
  // const [tabSpaces, setTabSpaces] = useState(100);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTabSpaces(500);
  //   }, 3000);
  // }, []);

  const onSwipe = (e) => {
    console.log(e);
  };

  return (
    <>
      {/* <FpsView /> */}
      <div
        style={{
          border: "2px solid black",
          borderRadius: 10,
          height: 500,
          width: 700,
          // backgroundColor: "#000",
        }}
      >
        <MetroTabs
          // transitionDuration={10000}
          // tabSpaces={tabSpaces}
          // tabsColor='#fff'
          // tabFontSize={20}
          // transitionTimingFunction='linear'
          onSwipe={onSwipe}
        >
          not rendered
          <MetroTab title='Home'>
            <div
              style={{
                // backgroundColor: "aquamarine",
                width: "100%",
                height: "100%",
              }}
            >
              content1
            </div>
          </MetroTab>
          <MetroTab title='Biography'>
            <div
              style={{
                // backgroundColor: "antiquewhite",
                width: "100%",
                height: "100%",
              }}
            >
              content2
            </div>
          </MetroTab>
          <MetroTab title='Contact1'>
            <div
              style={{
                // backgroundColor: "aqua",
                width: "100%",
                height: "100%",
              }}
            >
              content3
            </div>
          </MetroTab>
          <MetroTab title='Contact2ewewrwerrewrew'>
            <div
              style={{
                // backgroundColor: "aqua",
                width: "100%",
                height: "100%",
              }}
            >
              content4
            </div>
          </MetroTab>
          <MetroTab title='Discography'>
            <div
              style={{
                // backgroundColor: "aqua",
                width: "100%",
                height: "100%",
              }}
            >
              content3
            </div>
          </MetroTab>
        </MetroTabs>
      </div>
    </>
  );
});
