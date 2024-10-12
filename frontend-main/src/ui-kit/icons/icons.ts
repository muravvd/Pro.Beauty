import { IconNames, IconMap } from "./icon-map";

export type IconProp = {
  name: IconNames;
};
export const Icons = ({ name }: IconProp) => {
  return IconMap[name];
};
