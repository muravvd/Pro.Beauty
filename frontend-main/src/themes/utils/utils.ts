import {ThemeBaseNames, IThemeProps} from "../types";
import {multiply, pathOr} from 'ramda'
export const getColor = (name: ThemeBaseNames) => ({theme}: { theme: IThemeProps }) =>
    pathOr<string>('rgb(0, 0, 0, 0)', ['colors', name], theme)

export const getSizeBy = (multiplier=1) => `${multiply(4, multiplier)}px`