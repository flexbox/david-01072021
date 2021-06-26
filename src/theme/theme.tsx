import { createTheme } from "@shopify/restyle";

import { palette } from "./palette";

// Extracting values from palette and use the material design naming spec
// @link https://material.io/design/color/the-color-system.html#color-theme-creation

const theme = createTheme({
  colors: {
    ...palette,
    primary: palette["blue-500"],
    mainBackground: palette["blue-gray-100"],
    surfaceBackground: palette.white,
    skeletonBackground: palette["blue-gray-200"],
    text: palette.black,
    textHint: palette["blue-gray-500"],
    textOnDark: palette.white,
    icon: palette.black,
    iconOnDark: palette.white,
    sell: palette["red-500"],
    buy: palette["green-500"],
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 96,
    "4xl": 192,
    "5xl": 256,
  },
  icon: {
    xs: 14,
    s: 16,
    m: 32,
    l: 48,
    xl: 80,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  borderRadii: {
    xs: 4,
    s: 16,
    m: 24,
    l: 64,
  },
  textVariants: {
    h1: {
      fontSize: 26,
      fontWeight: "500",
    },
    h2: {
      fontSize: 24,
      fontWeight: "500",
    },
    h3: {
      fontSize: 20,
      fontWeight: "500",
    },
    p1: {
      fontSize: 16,
      lineHeight: 24,
    },
    p2: {
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 24,
      textTransform: "uppercase",
    },
    s1: {
      fontSize: 14,
    },
    s2: {
      fontSize: 12,
      fontWeight: "500",
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "500",
    },
  },
});

export type Theme = typeof theme;
export default theme;
