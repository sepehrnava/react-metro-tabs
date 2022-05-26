import React, { useEffect, useState } from "react";
import Hammer from "react-hammerjs";
import Tab from "./Tab/Index";

import { IMetroTabs } from "../Types/MetroTabs.types";

export const MetroTabContext = React.createContext<IMetroTabs>({});

export const MetroTabs = (props: IMetroTabs) => {
  const {
    children,
    transitionDuration,
    related,
    style,
    wrapperRef,
    targetHeight,
  } = props;

  let contextValue: IMetroTabs = {
    transitionDuration,
    related,
    wrapperRef,
    targetHeight,
  };

  let renderItems = [];

  if (children?.length > 0) {
    children.forEach((element: any) => {
      if (element.type === Tab) {
        renderItems.push(element);
      }
    });
  } else {
    if (children?.type === Tab) renderItems.push(children);
  }

  let titles: Array<string> = [];

  renderItems.forEach((element: any) => {
    titles.push(element.props.title);
  });

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const titlesContainer = document.getElementById("titles-container");
    const contentContainer = document.getElementById("content-container");

    const tabEl = document.getElementById("metro-tab" + activeTab);
    const firstTabEl = document.getElementById("metro-tab0");

    const contentEl = document.getElementById("metro-content" + activeTab);
    const firstContentEl = document.getElementById("metro-content0");

    if (
      tabEl &&
      firstTabEl &&
      titlesContainer &&
      contentContainer &&
      contentEl &&
      firstContentEl
    ) {
      const offsetLeftTitle =
        tabEl.getBoundingClientRect().left -
        firstTabEl.getBoundingClientRect().left;
      titlesContainer.style.transform =
        "translateX(-" + offsetLeftTitle + "px)";

      const offsetLeftContent =
        contentEl.getBoundingClientRect().left -
        firstContentEl.getBoundingClientRect().left;
      contentContainer.style.transform =
        "translateX(-" + offsetLeftContent + "px)";
    }
  }, [activeTab]);

  const handleSwipe = (e: { direction: number }) => {
    if (e.direction === 2 && activeTab < titles.length - 1)
      setActiveTab(activeTab + 1);
    if (e.direction === 4 && activeTab > 0) setActiveTab(activeTab - 1);
  };

  return (
    <MetroTabContext.Provider value={contextValue}>
      <Hammer onSwipe={handleSwipe}>
        <div
          style={{
            overflow: "hidden",

            height: "100%",
            width: "100%",
          }}
        >
          <div
            id='titles-container'
            style={{
              position: "relative",
              left: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              transition: "all 0.2s",
              width: "100%",
            }}
          >
            {titles.map((item, index) => (
              <h1
                id={"metro-tab" + index}
                key={index}
                style={{
                  marginRight: 20,
                  color: activeTab === index ? "#000" : "#888",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onClick={() => setActiveTab(index)}
              >
                {item}
              </h1>
            ))}
          </div>
          <div
            id='content-container'
            style={{
              position: "relative",
              left: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              transition: "all 0.2s",
              height: "100%",
            }}
          >
            {renderItems.map((item, index) => {
              return (
                <div
                  id={"metro-content" + index}
                  style={{
                    minWidth: "calc(100% - 10px)",
                    maxWidth: "calc(100% - 10px)",
                    height: "100%",
                  }}
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </Hammer>
    </MetroTabContext.Provider>
  );
};

MetroTabs.Tab = Tab;

export { Tab as MetroTab };
