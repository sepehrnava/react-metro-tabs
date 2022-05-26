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
      <div>
        <MetroTabs>
          not rendered
          <MetroTab>content1</MetroTab>
          <MetroTab>content2</MetroTab>
          <MetroTab>content3</MetroTab>
        </MetroTabs>
      </div>
    </>
  );
});
