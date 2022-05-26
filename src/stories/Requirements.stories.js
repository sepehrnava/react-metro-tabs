import React, { useState, useRef } from "react";
import { storiesOf } from "@storybook/react";
import { MetroTabs, MetroTab } from "../components/react-metro-tabs/MetroTabs";
import { FpsView } from "react-fps";

const stories = storiesOf("App Test", module);

stories.add("Hero", () => {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  const ref = useRef(null);
  return (
    <>
      {/* <FpsView /> */}
      <div
        style={{
          border: "2px solid black",
          borderRadius: 10,
          height: 500,
          width: 360,
        }}
      >
        <MetroTabs>
          not rendered
          <MetroTab title='tab1'>
            <div
              style={{
                backgroundColor: "aquamarine",
                width: "100%",
                height: "100%",
              }}
            >
              content1
            </div>
          </MetroTab>
          <MetroTab title='tab2'>
            <div
              style={{
                backgroundColor: "antiquewhite",
                width: "100%",
                height: "100%",
              }}
            >
              content2
            </div>
          </MetroTab>
          <MetroTab title='tab3'>
            <div
              style={{ backgroundColor: "aqua", width: "100%", height: "100%" }}
            >
              content3
            </div>
          </MetroTab>
        </MetroTabs>
      </div>
    </>
  );
});
