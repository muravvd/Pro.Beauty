export type ThemeBaseNames =
  | "background"
  | "surface"
  | "primary"
  | "secondary"
  | "danger"
  | "onBackground"
  | "onBackgroundDarker"
  | "lightgray";

export type ColorsT = Partial<Record<ThemeBaseNames, string>>;

export type IThemeProps = {
  colors: ColorsT;
};
