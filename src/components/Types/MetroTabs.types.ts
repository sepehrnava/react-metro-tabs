export interface ISetOpen {
  (value: boolean): void;
}
export interface IMetroTabs {
  // padding?: number;
  // margin?: number;
  children?: any;
  transitionDuration?: number;
  tabSpaces?: number | string;
  tabsColor?: string;
  tabFontSize?: number | string;
  transitionTimingFunction?: string;
  onTabChange?: (arg0: any) => any;
}

export interface ITab {
  children?: any;
  title: string;
}
