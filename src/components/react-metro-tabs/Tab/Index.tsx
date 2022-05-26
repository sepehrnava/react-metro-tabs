import React, { useContext, useEffect, useRef, useState } from "react";
import { IItem } from "../../Types/Hero.types";

const MetroTab = (props: IItem) => {
  const { children } = props;

  return <>{children}</>;
};

const styles = {};

export default MetroTab;
