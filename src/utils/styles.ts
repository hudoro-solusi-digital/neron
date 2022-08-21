import { SpacingType } from "../utils";

export const colors = {
  black: {
    "100": "#25282B",
    "80": "#515355",
    "60": "#7C7E80",
    "40": "#A8A9AA",
    "20": "#D3D4D5",
  },
  primary: {
    "100": "#5359EE",
    "80": "#757AF1",
    "60": "#989BF5",
    "40": "#989BF5",
    "20": "#DDDEFC",
  },
  success: {
    "100": "#47BF34",
    "80": "#6CCC5D",
    "60": "#91D985",
    "40": "#B5E5AE",
    "20": "#DAF2D6",
  },
  danger: {
    "100": "#EB3B3B",
    "80": "#EF6262",
    "60": "#F38989",
    "40": "#F7B1B1",
    "20": "#FBD8D8",
  },
  warning: {
    "100": "#FFC806",
    "80": "#FFD338",
    "60": "#FFDE6A",
    "40": "#FFE99B",
    "20": "#FFF4CD",
  },
  white: {
    "100": "#EFEFEF",
    "80": "#F2F2F2",
    "60": "#F5F5F5",
    "40": "#F9F9F9",
    "20": "#FCFCFC",
  },
};

export const fontFamilies = {
  poppins: ["Poppins", "sans-serif"].join(","),
  openSans: ["Open Sans", "sans-serif"].join(","),
};

export const fontSizes = {
  XL: "48px",
  L: "36px",
  M: "24px",
  S: "18px",
  XS: "14px",
  XXS: "12px",
};

export const shadows = {
  topNav: "0 2px 20px rgba(0, 0, 0, .15)",
  containerShadow: "0 0 25px rgba(0, 0, 0, .15)",
};

export const buttonThemes = {
  primary: {
    background: colors.primary[100],
    foreground: colors.white[100],
  },
  danger: {
    background: colors.danger[100],
    foreground: colors.danger[100],
  },
  success: {
    background: colors.success[100],
    foreground: colors.success[100],
  },
  warning: {
    background: colors.warning[100],
    foreground: colors.warning[100],
  },
};

export const spacing = (space: SpacingType) => {
  return 4 * space;
};
