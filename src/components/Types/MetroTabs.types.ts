import { RefObject } from "react";
export interface ISetOpen {
  (value: boolean): void;
}
export interface IMetroTabs {
  open?: boolean;
  setOpen?: ISetOpen;
  controlled?: boolean;
  children?: any;
  transitionDuration?: number;
  related?: boolean;
  style?: Object;
  wrapperRef?: RefObject<HTMLElement>;
  targetHeight?: number | "full" | "same";
}

export interface ITab {
  children?: any;
  title: string;
}
