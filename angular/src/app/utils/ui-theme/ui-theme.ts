import { UiTheme } from "@models/ui-preferences";

export const generateThemeStyles = (themeConfig: UiTheme): string => {
  let themeTextContent = '';
  Object.entries(themeConfig).forEach(([key, value]) => {
    themeTextContent += `--${key}:${value};`;
  })

  return `:root {${themeTextContent}}`;
}
