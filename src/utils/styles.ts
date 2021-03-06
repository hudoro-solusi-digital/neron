import { SpacingType } from "../utils";

export const colors = {
  black: {
    "100": "rgba(37, 40, 43, 1)",
    "80": "rgba(37, 40, 43, .8)",
    "60": "rgba(37, 40, 43, .6)",
    "40": "rgba(37, 40, 43, .4)",
    "20": "rgba(37, 40, 43, .2)",
  },
  primary: {
    "100": "rgba(83, 89, 238, 1)",
    "80": "rgba(83, 89, 238, .8)",
    "60": "rgba(83, 89, 238, .6)",
    "40": "rgba(83, 89, 238, .4)",
    "20": "rgba(83, 89, 238, .2)",
  },
  success: {
    "100": "rgba(71, 191, 52, 1)",
    "80": "rgba(71, 191, 52, .8)",
    "60": "rgba(71, 191, 52, .6)",
    "40": "rgba(71, 191, 52, .4)",
    "20": "rgba(71, 191, 52, .2)",
  },
  danger: {
    "100": "rgba(235, 59, 59, 1)",
    "80": "rgba(235, 59, 59, .8)",
    "60": "rgba(235, 59, 59, .6)",
    "40": "rgba(235, 59, 59, .4)",
    "20": "rgba(235, 59, 59, .2)",
  },
  warning: {
    "100": "rgba(255, 200, 6, 1)",
    "80": "rgba(255, 200, 6, .8)",
    "60": "rgba(255, 200, 6, .6)",
    "40": "rgba(255, 200, 6, .4)",
    "20": "rgba(255, 200, 6, .2)",
  },
  white: {
    "100": "rgba(239, 239, 239, 1)",
    "80": "rgba(239, 239, 239, .8)",
    "60": "rgba(239, 239, 239, .6)",
    "40": "rgba(239, 239, 239, .4)",
    "20": "rgba(239, 239, 239, .2)",
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
