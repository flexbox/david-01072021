import { createTheme } from "@shopify/restyle";

import { palette } from "./palette";

const theme = createTheme({
  colors: {
    ...palette,
    background: palette.white,
    text: palette.black,
    textHint: palette["blue-gray-500"],
    textOnDark: palette.white,
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
    },
    s1: {
      fontSize: 14,
    },
    s2: {
      fontSize: 12,
      fontWeight: "500",
    },
  },
});

export type Theme = typeof theme;
export default theme;
