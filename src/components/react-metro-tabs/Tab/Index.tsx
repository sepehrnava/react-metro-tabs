import React, { useContext, useEffect, useRef, useState } from "react";
import { ITab } from "../../Types/MetroTabs.types";

const MetroTab = (props: ITab) => {
  const { children } = props;

  return <>{children}</>;
};

const styles = {};

export default MetroTab;
