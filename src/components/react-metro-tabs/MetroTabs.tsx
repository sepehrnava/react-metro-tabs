import React, { useState } from "react";
import Tab from "./Tab/Index";

import { IHero } from "../Types/Hero.types";

export const MetroTabContext = React.createContext<IHero>({});

export const MetroTabs = (props: IHero) => {
  const {
    children,
    transitionDuration,
    related,
    style,
    wrapperRef,
    targetHeight,
  } = props;

  let contextValue: IHero = {
    transitionDuration,
    related,
    wrapperRef,
    targetHeight,
  };

  let renderItems = [];

  if (children.length > 0) {
    children.forEach((element: any) => {
      if (element.type === Tab) {
        renderItems.push(element);
      }
    });
  } else {
    if (children.type === Tab) renderItems.push(children);
  }

  return (
    <MetroTabContext.Provider value={contextValue}>
      <div style={style}>
        {renderItems.map((item, index) => (
          // Only do this if items have no stable IDs
          <div key={index}>{item}</div>
        ))}
      </div>
    </MetroTabContext.Provider>
  );
};

MetroTabs.Tab = Tab;

export { Tab as MetroTab };
